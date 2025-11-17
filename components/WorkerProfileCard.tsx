
import React from 'react';
import type { WorkerProfile } from '../types';

interface WorkerProfileCardProps {
    worker: WorkerProfile;
}

const StarIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const VerifiedIcon: React.FC = () => (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zM12.969 9.239a.75.75 0 00-1.06-1.06l-3.25 3.25-1.5-1.5a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.75-3.75z" clipRule="evenodd" />
    </svg>
);


const WorkerProfileCard: React.FC<WorkerProfileCardProps> = ({ worker }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={worker.imageUrl} alt={worker.name} />
                {worker.isVerified && (
                    <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 shadow-md" title="Verified Professional">
                       <VerifiedIcon />
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{worker.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{worker.location}</p>
                <div className="flex items-center mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(worker.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-2">{worker.rating.toFixed(1)} ({worker.reviewCount} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {worker.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                    ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 h-16 overflow-hidden">{worker.bio}</p>
                <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default WorkerProfileCard;
