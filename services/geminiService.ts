
import { GoogleGenAI, Type } from "@google/genai";
import type { JobPosting } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("⚠️ No API key found. Using demo data. Add VITE_GEMINI_API_KEY for AI-powered results.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

// Mock data for demo/prototype purposes
const getMockJobs = (skills: string[]): JobPosting[] => {
    const allMockJobs: JobPosting[] = [
        {
            id: 1,
            title: "Domestic Helper",
            company: "Local Household",
            location: "Mumbai, Maharashtra",
            description: "Seeking reliable domestic help for daily cleaning, cooking, and household chores.",
            pay: "₹12,000/month",
            requiredSkills: ["Cooking", "Cleaning", "Time Management"]
        },
        {
            id: 2,
            title: "Tailoring Assistant",
            company: "Fashion Boutique",
            location: "Delhi, Delhi",
            description: "Assist with garment stitching, alterations, and basic tailoring work.",
            pay: "₹15,000/month",
            requiredSkills: ["Sewing", "Tailoring", "Attention to Detail"]
        },
        {
            id: 3,
            title: "Beauty Salon Assistant",
            company: "Glow Beauty Salon",
            location: "Bangalore, Karnataka",
            description: "Support salon operations including hairstyling, makeup, and customer service.",
            pay: "₹18,000/month",
            requiredSkills: ["Beauty Care", "Customer Service", "Hairstyling"]
        },
        {
            id: 4,
            title: "Handicraft Worker",
            company: "Artisan Collective",
            location: "Jaipur, Rajasthan",
            description: "Create handmade crafts, jewelry, and decorative items for local and online markets.",
            pay: "₹10,000-20,000/month",
            requiredSkills: ["Handicrafts", "Creativity", "Manual Dexterity"]
        },
        {
            id: 5,
            title: "Catering Helper",
            company: "Spice Kitchen Catering",
            location: "Chennai, Tamil Nadu",
            description: "Assist in food preparation, serving, and cleanup for events and catering services.",
            pay: "₹14,000/month",
            requiredSkills: ["Cooking", "Food Service", "Teamwork"]
        },
        {
            id: 6,
            title: "Childcare Assistant",
            company: "Happy Kids Daycare",
            location: "Pune, Maharashtra",
            description: "Care for children, assist with activities, and ensure a safe environment.",
            pay: "₹16,000/month",
            requiredSkills: ["Childcare", "Patience", "First Aid"]
        },
        {
            id: 7,
            title: "Retail Sales Associate",
            company: "Local Boutique",
            location: "Hyderabad, Telangana",
            description: "Assist customers, manage inventory, and handle cash transactions.",
            pay: "₹13,000/month",
            requiredSkills: ["Customer Service", "Sales", "Communication"]
        },
        {
            id: 8,
            title: "Home Tutor",
            company: "Private Household",
            location: "Kolkata, West Bengal",
            description: "Provide tutoring for primary school children in basic subjects.",
            pay: "₹8,000-15,000/month",
            requiredSkills: ["Teaching", "Patience", "Subject Knowledge"]
        }
    ];

    // Filter jobs based on skills (simple matching)
    if (skills.length === 0) {
        return allMockJobs.slice(0, 5);
    }

    const skillsLower = skills.map(s => s.toLowerCase());
    const matchedJobs = allMockJobs.filter(job => 
        job.requiredSkills.some(reqSkill => 
            skillsLower.some(userSkill => 
                reqSkill.toLowerCase().includes(userSkill) || userSkill.includes(reqSkill.toLowerCase())
            )
        )
    );

    return matchedJobs.length > 0 ? matchedJobs : allMockJobs.slice(0, 5);
};

export const findMatchingJobs = async (skills: string[]): Promise<JobPosting[]> => {
    // If no API key, return mock data
    if (!API_KEY) {
        console.log("📋 Using demo data (no API key configured)");
        // Simulate API delay for realistic feel
        await new Promise(resolve => setTimeout(resolve, 800));
        return getMockJobs(skills);
    }
    
    const prompt = `Based on the user's skills: ${skills.join(', ')}, find suitable job opportunities.`;

    try {
        const response = await ai!.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING, description: 'The job title.' },
                            company: { type: Type.STRING, description: 'Hiring company or individual, e.g., "Local Household", "Small Business".' },
                            location: { type: Type.STRING, description: 'City or area.' },
                            description: { type: Type.STRING, description: 'A brief job description.' },
                            pay: { type: Type.STRING, description: 'Estimated pay, e.g., "₹12,000/month".' },
                            requiredSkills: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING }
                            }
                        },
                         required: ["title", "company", "location", "description", "pay", "requiredSkills"],
                    },
                },
            },
        });
        
        const jsonText = response.text.trim();
        const generatedJobs = JSON.parse(jsonText);
        
        // Add a random ID to each job
        return generatedJobs.map((job: Omit<JobPosting, 'id'>, index: number) => ({
            ...job,
            id: Date.now() + index,
        }));

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        console.log("⚠️ Falling back to demo data due to API error");
        // Fallback to mock data if API fails
        return getMockJobs(skills);
    }
};
