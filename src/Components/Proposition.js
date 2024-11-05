import React, { useEffect, useState } from 'react';

const Proposition = () => {

    const propo = [
        {id:1 , title:'Bank-Beating Rates' , img:'./Bank-Beating Rates.png' , desc: 'save more with our bank-beating rates. More value in every currency exchange.'},
        {id:1 , title:'No Fees & No Limits' , img:'./No Fees & No Limits.png' , desc: 'Enjoy the freedom of No transfer fees and no transaction limits. Global payments made boundless."'},
        {id:1 , title:'24/7 Support' , img:'./7 Support.png' , desc: 'Always here for you with 24/7 support. Expert help whenever you need it.'},
        {id:1 , title:'Transparent Pricing' , img:'./Transparent Pricing.png' , desc: 'Clarity in every transaction. No surprises, just fair, straightforward rates.'},
        {id:1 , title:'Secure & Cutting-Edge Software' , img:'./Expert Compliance Team.png' , desc: 'Trust in our secure, cutting-edge platform with 2FA (2 Factor Authentication). Safeguarding your transactions, always'},
        {id:1 , title:'2-H Support Window 2-H Support Window' , img:'./2-Hour Support Window2-Hour Support Window.png' , desc: 'Rapid resolutions with our 2-hour support window. Quick answers to keep you moving.'},
        {id:1 , title:'Dedicated Account Managers' , img:'./Dedicated Account Managers.png' , desc: 'Your dedicated account manager: personalised guidance for your business’s global payment needs.'},
        {id:1 , title:'Expert Compliance Team' , img:'./Expert Compliance Team (1).png' , desc: 'Protected by experts. Our compliance team ensures your transactions are safe and sound, preventing financial crime'},
    ]

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
        <div className='proposition-card pt-48 mainPage2'>
            <div className='text-center '>
                <p className='small'>B e n e fi t s</p>
                <p className='mt-3 roboto text-6xl fw600'>The KeyFX Value Proposition</p>
            </div>
            <div className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ${isMobile ? 'mt-16' : 'mt-32'} `}>
                {propo.map(
                    pro => (
                        <div className='py-12 px-5 bg-anim-1'>
                            <img alt="Not Found" src={pro.img} />
                            <p className='roboto fw600 text-xl mt-4'>{pro.title}</p>
                            <p className='small mt-3'>{pro.desc}</p>
                        </div>

                    )
                )}
            </div>

        </div>
    );
};

export default Proposition;