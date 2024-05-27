import React from 'react';
import HeroSection from '../components2/HeroSection';
import dsbg1 from '../assets/dsbg1.jpg';

const Discoverus = () => {
    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${dsbg1})` }}>
            <div className="bg-black bg-opacity-50 min-h-screen">
                <HeroSection />
            </div>
        </div>
    );
}

export default Discoverus;
