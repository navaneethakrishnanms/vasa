
import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FindTalentPage from './pages/FindTalentPage';
import FindWorkPage from './pages/FindWorkPage';
import LearningHubPage from './pages/LearningHubPage';
import ProfilePage from './pages/ProfilePage';
import SOSButton from './components/SOSButton';

export type Page = 'home' | 'findTalent' | 'findWork' | 'learning' | 'profile';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home'); 

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setPage={setCurrentPage} />;
            case 'findTalent':
                return <FindTalentPage />;
            case 'findWork':
                return <FindWorkPage />;
            case 'learning':
                return <LearningHubPage />;
            case 'profile':
                return <ProfilePage />;
            default:
                return <HomePage setPage={setCurrentPage} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-gray-800">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="p-4 md:p-8">
                {renderPage()}
            </main>
            <SOSButton />
            <footer className="text-center p-4 text-gray-500 text-sm mt-8 border-t border-slate-200">
                <p>&copy; 2025 VaSa Women's Connect. Her Dreams, Our Mission.</p>
            </footer>
        </div>
    );
};

export default App;
