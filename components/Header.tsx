
import React from 'react';
import type { Page } from '../App';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const navItems: { page: Page; label: string }[] = [
        { page: 'home', label: 'Home' },
        { page: 'findTalent', label: 'Hire Talent' },
        { page: 'findWork', label: 'Find Work' },
        { page: 'learning', label: 'Learning Hub' },
        { page: 'profile', label: 'My Profile' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.97M15 21h6m-6-1a6 6 0 00-5.176-5.97m-3.56-4.426A4 4 0 0112 4.354m0 5.292a4 4 0 01-3.268 1.54A4 4 0 015 11.292a4 4 0 013.268-1.542" /></svg>
                    <h1 className="text-xl font-bold text-gray-800">
                        <span className="text-purple-600">Va</span>Sa<span className="font-light"> Connect</span>
                    </h1>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.page}
                            onClick={() => setCurrentPage(item.page)}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                currentPage === item.page
                                    ? 'bg-purple-600 text-white'
                                    : 'text-gray-600 hover:bg-purple-100 hover:text-purple-700'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className="md:hidden">
                    {/* Mobile menu button can be added here */}
                </div>
            </div>
        </header>
    );
};

export default Header;
