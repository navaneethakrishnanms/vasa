
import React from 'react';

const SOSButton: React.FC = () => {
    const handleSOSClick = () => {
        alert(
            'SOS Activated!\n\nYour emergency contacts and local authorities have been notified with your current location.\n\n(This is a simulation)'
        );
    };

    return (
        <button
            onClick={handleSOSClick}
            className="fixed bottom-6 right-6 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 z-50 animate-pulse"
            aria-label="Emergency SOS"
        >
            <span className="font-bold text-xl">SOS</span>
        </button>
    );
};

export default SOSButton;
