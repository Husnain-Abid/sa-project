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
                <div className={isMobile ? 'mt-0 pt-0 w-full text-center' : 'mt-10  text-center w-700'}>
                    <p className={`text-grad roboto  fw600  ${isMobile ? "text-[44px]" : "text-[60px]"   }  `}>Empowering</p>
                    <p className={`mt-3 roboto text-6xl ${isMobile ? "text-[44px]" : "text-[60px]" }   fw600`}>Your Business Globally</p>
                    <p className={`mt-3   ${isMobile ? "text-[20px]" : "text-[20px] px-10" } leading-[30px]`}>Your One-Stop for <b>International Payments, Currency Exchange,</b> and <b>Cards</b></p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'sm:flex-row'} gap-4 justify-center mt-3`}>
                        <button className='text-[16px]  rounded-full text-white bg-[#394375] px-[24px]  flex items-center justify-center gap-2'>Open an Account <i className={`bi bi-arrow-right-short text-3xl ${isMobile ? "py-2" : "py-0"   } `}></i></button>
                        <button className='text-[16px]  btn-ot  px-[24px]  rounded-full'>Talk to Our Team</button>
                    </div>
                </div>
            </div>
            <World />
            <Converter />
        </div>
    );
};

export default Header;
