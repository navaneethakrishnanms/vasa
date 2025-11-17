
import React from 'react';
import type { JobPosting } from '../types';

interface JobPostingCardProps {
    job: JobPosting;
    isAiGenerated?: boolean;
}

const JobPostingCard: React.FC<JobPostingCardProps> = ({ job, isAiGenerated }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${isAiGenerated ? 'border-green-400' : 'border-purple-500'} relative`}>
            {isAiGenerated && (
                <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                   <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    AI Match
                </div>
            )}
            <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{job.company} - <span className="text-gray-500">{job.location}</span></p>
            <p className="text-lg font-semibold text-green-600 my-2">{job.pay}</p>
            <p className="text-gray-700 text-sm mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="font-semibold text-sm">Skills:</span>
                {job.requiredSkills.map(skill => (
                    <span key={skill} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                ))}
            </div>
            <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                Apply Now
            </button>
        </div>
    );
};

export default JobPostingCard;
