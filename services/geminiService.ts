
import { GoogleGenAI, Type } from "@google/genai";
import type { JobPosting } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("Gemini API key not found. Please set the VITE_GEMINI_API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const findMatchingJobs = async (skills: string[]): Promise<JobPosting[]> => {
    if (!API_KEY) {
        throw new Error("API key is not configured.");
    }
    
    const prompt = `Based on the user's skills: ${skills.join(', ')}, find suitable job opportunities.`;

    try {
        const response = await ai.models.generateContent({
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
        throw new Error("Failed to fetch AI-powered job matches. Please try again later.");
    }
};
