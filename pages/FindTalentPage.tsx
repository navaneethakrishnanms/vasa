
import React, { useState, useMemo } from 'react';
import { MOCK_WORKER_PROFILES } from '../constants';
import WorkerProfileCard from '../components/WorkerProfileCard';

const FindTalentPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const filteredWorkers = useMemo(() => {
        return MOCK_WORKER_PROFILES.filter(worker => {
            const matchesSearchTerm = 
                worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                worker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
            
            const matchesLocation = worker.location.toLowerCase().includes(location.toLowerCase());

            return matchesSearchTerm && matchesLocation;
        });
    }, [searchTerm, location]);

    return (
        <div className="container mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-bold mb-2">Find Skilled Professionals</h2>
                <p className="text-gray-600 mb-4">Search for verified and talented women to get your work done.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Search by skill or name (e.g., 'Tailoring', 'Priya')"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Location (e.g., 'Mumbai')"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorkers.length > 0 ? (
                    filteredWorkers.map(worker => (
                        <WorkerProfileCard key={worker.id} worker={worker} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No professionals found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default FindTalentPage;
