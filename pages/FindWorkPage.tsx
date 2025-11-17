
import React, { useState, useCallback } from 'react';
import { MOCK_JOB_POSTINGS, MOCK_WORKER_PROFILES } from '../constants';
import JobPostingCard from '../components/JobPostingCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { findMatchingJobs } from '../services/geminiService';
import type { JobPosting } from '../types';

const FindWorkPage: React.FC = () => {
    const [aiJobs, setAiJobs] = useState<JobPosting[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Using a mock user profile for the demo
    const currentUserProfile = MOCK_WORKER_PROFILES[1]; // Anjali Gupta (Tailoring)

    const handleFindMatchingJobs = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setAiJobs([]);
        try {
            const jobs = await findMatchingJobs(currentUserProfile.skills);
            setAiJobs(jobs);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }, [currentUserProfile.skills]);

    return (
        <div className="container mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-bold mb-2">Find Your Next Opportunity</h2>
                <p className="text-gray-600 mb-4">Browse job postings or use our AI to find the perfect match for your skills.</p>
                
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="font-semibold">Your skills: {currentUserProfile.skills.join(', ')}</p>
                    <button
                        onClick={handleFindMatchingJobs}
                        disabled={isLoading}
                        className="mt-4 bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 flex items-center gap-2"
                    >
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        {isLoading ? 'Searching...' : 'Find Matching Jobs with AI'}
                    </button>
                </div>
            </div>

            {isLoading && <LoadingSpinner />}
            {error && <p className="text-center text-red-500 bg-red-100 p-3 rounded-md">{error}</p>}
            
            <div className="space-y-6">
                {aiJobs.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-green-400 pb-2">AI-Powered Matches</h3>
                        {aiJobs.map(job => (
                            <JobPostingCard key={job.id} job={job} isAiGenerated />
                        ))}
                    </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-400 pb-2 pt-6">General Job Listings</h3>
                {MOCK_JOB_POSTINGS.map(job => (
                    <JobPostingCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default FindWorkPage;
