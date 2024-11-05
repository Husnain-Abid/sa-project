import React, { useEffect, useState } from 'react';

const Subscribe = () => {


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
        <div className='pt-32 sub-card h-52 mb-5'>
            <div className={`rounded-xl v-card py-4  bg-white grid grid-cols-2 ${isMobile? "px-4 text-center" : "px-10 " } `}>
                <div className='lg:col-span-1 col-span-2'>
                    <div className='flex text-xl fw600 roboto'><p className='text-rbw'>Need Help Before Signing Up?</p><p className='lg:inline hidden'>Get Your </p></div>
                    <p className='text-xl fw600 roboto  hidden lg:flex'>Dedicated Account Manager Today!</p>
                    <p className='text-xl fw600 roboto flex lg:hidden '>Get Your Dedicated Account Manager Today!</p>
                    <p className={`small ${isMobile? "w-full" : " w-50" }  `}>Not ready to sign up just yet? No problem. Our account managers are here to provide the support and assurance you need.</p>
                </div>
                <div className='flex items-center sm:justify-end justify-center lg:col-span-1 col-span-2 mt-5'>
                    <div class="subscribe-container w-sm-full">
                        <input className='sm-inp w-sm-full' type="email" placeholder="Enter your email" />
                        <button className='roboto btm-sm w-sm-full' type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;