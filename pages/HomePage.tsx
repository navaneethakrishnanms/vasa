import React from 'react';
import type { Page } from '../App';

interface HomePageProps {
    setPage: (page: Page) => void;
}

// Fix: Use React.ReactElement instead of JSX.Element to be explicit and avoid potential namespace resolution issues.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4 text-purple-600">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
    return (
        <div className="container mx-auto">
            {/* Hero Section */}
            <section className="text-center py-16 px-4 bg-purple-50 rounded-lg" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')"}}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Empowering Women, One Skill at a Time.</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Connecting talented women across India with meaningful work opportunities. Your skills have a new home.</p>
                <div className="mt-8 flex justify-center gap-4">
                    <button onClick={() => setPage('findWork')} className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-purple-700 transition-colors shadow-md">
                        Find Work
                    </button>
                    <button onClick={() => setPage('findTalent')} className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors border border-purple-600 shadow-md">
                        Hire Talent
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <h3 className="text-3xl font-bold text-center mb-12">How VaSa Works</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                        title="Create a Profile"
                    >
                        Showcase your skills, experience, and services to a wide audience of potential clients and employers.
                    </FeatureCard>
                    <FeatureCard
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                        title="Get Discovered"
                    >
                        Our smart matching system connects you with jobs and projects that fit your unique talents.
                    </FeatureCard>
                    <FeatureCard
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                        title="Earn & Grow"
                    >
                        Secure your income, build your reputation, and access free learning resources to upskill yourself.
                    </FeatureCard>
                </div>
            </section>
        </div>
    );
};

export default HomePage;