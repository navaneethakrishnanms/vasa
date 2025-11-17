
import type { WorkerProfile, JobPosting } from './types';

export const MOCK_WORKER_PROFILES: WorkerProfile[] = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Mumbai, MH',
        skills: ['Cooking', 'Childcare', 'Household Cleaning'],
        bio: 'Experienced and reliable cook specializing in authentic Indian cuisine. Passionate about creating healthy and delicious meals for families.',
        rating: 4.9,
        reviewCount: 34,
        isVerified: true,
        imageUrl: 'https://picsum.photos/seed/priya/300/300'
    },
    {
        id: 2,
        name: 'Anjali Gupta',
        location: 'Delhi, DL',
        skills: ['Tailoring', 'Embroidery', 'Fashion Design'],
        bio: 'Skilled tailor with over 10 years of experience in custom clothing and alterations. I can bring any design to life with precision and care.',
        rating: 4.8,
        reviewCount: 52,
        isVerified: true,
        imageUrl: 'https://picsum.photos/seed/anjali/300/300'
    },
    {
        id: 3,
        name: 'Sunita Devi',
        location: 'Rural Bihar',
        skills: ['Handicrafts', 'Weaving', 'Pottery'],
        bio: 'Creating traditional handicrafts passed down through generations. Each piece tells a story of my village and its culture.',
        rating: 5.0,
        reviewCount: 18,
        isVerified: true,
        imageUrl: 'https://picsum.photos/seed/sunita/300/300'
    },
    {
        id: 4,
        name: 'Fatima Begum',
        location: 'Hyderabad, TS',
        skills: ['Henna Art', 'Beauty Services', 'Makeup'],
        bio: 'Professional henna artist for weddings, festivals, and special occasions. Using organic henna for beautiful and long-lasting designs.',
        rating: 4.9,
        reviewCount: 88,
        isVerified: false,
        imageUrl: 'https://picsum.photos/seed/fatima/300/300'
    },
    {
        id: 5,
        name: 'Lakshmi Iyer',
        location: 'Chennai, TN',
        skills: ['Elderly Care', 'Nursing Assistance', 'Companionship'],
        bio: 'Compassionate caregiver with a certification in elderly care. Dedicated to providing comfort and support to seniors.',
        rating: 4.9,
        reviewCount: 41,
        isVerified: true,
        imageUrl: 'https://picsum.photos/seed/lakshmi/300/300'
    },
    {
        id: 6,
        name: 'Rani Kaur',
        location: 'Amritsar, PB',
        skills: ['Tiffin Service', 'Catering', 'Event Cooking'],
        bio: 'Running a home-based tiffin service delivering fresh, hot, and hygienic Punjabi meals to offices and homes.',
        rating: 4.7,
        reviewCount: 65,
        isVerified: true,
        imageUrl: 'https://picsum.photos/seed/rani/300/300'
    }
];

export const MOCK_JOB_POSTINGS: JobPosting[] = [
    {
        id: 1,
        title: 'Full-time Nanny for 2 Children',
        company: 'Malhotra Family',
        location: 'Mumbai, MH',
        description: 'Looking for a caring and experienced nanny to look after our two children (ages 3 and 6). Responsibilities include meal prep, and light housekeeping.',
        pay: '₹15,000 - ₹20,000/month',
        requiredSkills: ['Childcare', 'Cooking']
    },
    {
        id: 2,
        title: 'Custom Blouse Stitching for Wedding',
        company: 'Gupta Boutique',
        location: 'Delhi, DL',
        description: 'Urgent need for a skilled tailor to stitch 5 designer blouses for a wedding party. Must have experience with intricate designs and embroidery.',
        pay: '₹8,000 (Project-based)',
        requiredSkills: ['Tailoring', 'Embroidery']
    },
    {
        id: 3,
        title: 'Part-time Cook for South Indian Cuisine',
        company: 'Iyer Residence',
        location: 'Chennai, TN',
        description: 'We are looking for a cook who can prepare authentic South Indian vegetarian meals for a family of 4, five days a week.',
        pay: '₹10,000/month',
        requiredSkills: ['Cooking']
    },
    {
        id: 4,
        title: 'Handmade Gift Baskets - Bulk Order',
        company: 'Corporate Gifting Co.',
        location: 'Hyderabad, TS',
        description: 'Seeking artisans to create 100 handmade gift baskets for a corporate event. Should include local handicrafts and art pieces.',
        pay: '₹50,000 (Project-based)',
        requiredSkills: ['Handicrafts']
    }
];
