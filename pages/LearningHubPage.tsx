
import React from 'react';

const LearningVideoCard: React.FC<{ title: string; category: string; imageUrl: string }> = ({ title, category, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        <div className="p-4">
            <p className="text-sm text-purple-600 font-semibold">{category}</p>
            <h3 className="font-bold text-gray-800">{title}</h3>
        </div>
    </div>
);

const LearningHubPage: React.FC = () => {
    const videos = [
        { title: 'Advanced Tailoring Techniques', category: 'Fashion', imageUrl: 'https://picsum.photos/seed/learn1/400/200' },
        { title: 'Digital Marketing for Small Businesses', category: 'Business', imageUrl: 'https://picsum.photos/seed/learn2/400/200' },
        { title: 'Safe & Hygienic Cooking Practices', category: 'Culinary', imageUrl: 'https://picsum.photos/seed/learn3/400/200' },
        { title: 'Customer Communication Skills', category: 'Soft Skills', imageUrl: 'https://picsum.photos/seed/learn4/400/200' },
        { title: 'Introduction to Financial Literacy', category: 'Finance', imageUrl: 'https://picsum.photos/seed/learn5/400/200' },
        { title: 'Creating Handicrafts That Sell', category: 'Arts & Crafts', imageUrl: 'https://picsum.photos/seed/learn6/400/200' },
    ];
    return (
        <div className="container mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Learning Hub</h2>
                <p className="text-gray-600">Upskill yourself with our free training videos and courses.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map(video => (
                    <LearningVideoCard key={video.title} {...video} />
                ))}
            </div>
        </div>
    );
};

export default LearningHubPage;
