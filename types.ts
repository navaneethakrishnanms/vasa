import type { ReactElement } from 'react';

export interface WorkerProfile {
    id: number;
    name: string;
    location: string;
    skills: string[];
    bio: string;
    rating: number;
    reviewCount: number;
    isVerified: boolean;
    imageUrl: string;
}

export interface JobPosting {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    pay: string;
    requiredSkills: string[];
}

export interface ServiceCategory {
    name: string;
    // Fix: Use ReactElement instead of JSX.Element as the JSX namespace is not available in .ts files without an import.
    icon: ReactElement;
    description: string;
}