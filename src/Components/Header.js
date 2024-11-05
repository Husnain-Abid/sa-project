import React, { useState, useEffect } from 'react';
import Converter from './Converter';
import World from './WorldTour';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        // Set initial value based on screen width
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className='flex justify-center mainPage'>
                <div className={isMobile ? 'mt-0 pt-0 w-full text-center' : 'mt-10 pt-5 text-center w-700'}>
                    <p className='text-grad roboto text-6xl fw600'>Empowering</p>
                    <p className='mt-3 roboto text-6xl fw600'>Your Business Globally</p>
                    <p className='mt-3 text-xl'>Your One-Stop for <b>International Payments, Currency Exchange,</b> and <b>Cards</b></p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'sm:flex-row'} gap-4 justify-center mt-3`}>
                        <button className='text-l btn rounded-full btn-p flex items-center justify-center gap-1'>Open an Account <i className="bi bi-arrow-right-short text-3xl"></i></button>
                        <button className='text-l btn btn-ot rounded-full'>Talk to Our Team</button>
                    </div>
                </div>
            </div>
            <World />
            <Converter />
        </div>
    );
};

export default Header;
