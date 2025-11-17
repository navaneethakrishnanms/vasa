
import React from 'react';
import { MOCK_WORKER_PROFILES, MOCK_JOB_POSTINGS } from '../constants';

const ProfilePage: React.FC = () => {
    // Using a mock user profile for the demo
    const user = MOCK_WORKER_PROFILES[0]; // Priya Sharma
    const pastJobs = MOCK_JOB_POSTINGS.slice(0, 2);

    return (
        <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img src={user.imageUrl} alt={user.name} className="w-32 h-32 rounded-full object-cover border-4 border-purple-200" />
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-3xl font-bold">{user.name}</h2>
                        <p className="text-gray-500">{user.location}</p>
                        <div className="flex justify-center md:justify-start flex-wrap gap-2 my-4">
                            {user.skills.map(skill => (
                                <span key={skill} className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                            ))}
                        </div>
                        <p className="text-gray-700 max-w-xl">{user.bio}</p>
                    </div>
                    <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                        Edit Profile
                    </button>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8">
                    <h3 className="text-2xl font-bold mb-4">Past Work</h3>
                    <div className="space-y-4">
                        {pastJobs.map(job => (
                            <div key={job.id} className="bg-gray-50 p-4 rounded-lg border">
                                <h4 className="font-semibold text-gray-800">{job.title}</h4>
                                <p className="text-sm text-gray-600">{job.company} - <span className="text-green-600 font-medium">{job.pay}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
