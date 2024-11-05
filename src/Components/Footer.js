import React, { useEffect, useState } from 'react';

const Footer = () => {

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
        <div className='mainPage2 pb-28'>
            <div>
            <img alt="Not Found" src='/logo.png'/>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2'>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Key.FX</p>

                    <a className='mt-4 roboto text-sm mt-2'>About Us</a>
                    <a className='mt-2 roboto text-sm mt-2'>Why Key.FX ?</a>
                    <a className='mt-2 roboto text-sm mt-2'>Pricing</a>
                    <a className='mt-2 roboto text-sm mt-2'>Blog</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Features</p>

                    <a className='mt-4 roboto text-sm mt-2'>Features 1</a>
                    <a className='mt-2 roboto text-sm mt-2'>Features 2</a>
                    <a className='mt-2 roboto text-sm mt-2'>Features 3</a>
                    <a className='mt-2 roboto text-sm mt-2'>Features 4</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Support</p>

                    <a className='mt-4 roboto text-sm  mt-2'>Terms of Service</a>
                    <a className='mt-2 roboto text-sm mt-2'>Privacy and Cookie Policy</a>
                    <a className='mt-2 roboto text-sm mt-2'>FAQ</a>
                    <a className='mt-2 roboto text-sm mt-2'>Complaint form</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Contact us</p>

                    <a className='mt-4 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Phone Calling Rounded.svg' />0800-002-9331</a>
                    <a className='mt-2 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Letter.svg' />info@keyfx.co.uk</a>
                    <a className='mt-2 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Clock Circle.svg' />9am-5pm Mon - Fri</a>
                    <a className='mt-2 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Streets Map Point.svg' />128 City Road, London, EC1V 2NX</a>
                </div>
            </div>
            <div className='border-line'>

            </div>
            <div className={`flex sm-col gap-4 ${isMobile ? " items-start" : " items-center" }  `}>
                <img className='xl:w-40 ' src="/LCCI 1.svg" alt='Not Available' />
                <p className='text-xxs roboto'>KeyFX registered in the United Kingdom under registration number 12994112, (128 City Road, London, United Kingdom, EC1V 2NX) and is an appointed representative and distributor for The Payment Firm Ltd t/a The PayFirm Ltd. Registered office: 5 Jewry St, London, EC3N 2EX. Registered in England and Wales. Registered number: 12483085.The Payment Firm Ltd is authorised and regulated by the Financial Conduct Authority Reference number 901084 as a Payment services / Authorised Electronic Money Institution which stipulates the rights and obligations for both payment service providers and users, how to authorise and execute transactions, liability in case of unauthorised use of payment instruments, refunds on payments, payment orders,, value dating of payments and safeguarding client money.</p>
            </div>
            <div className='flex my-4 gap-3'>
                <p className='roboto'>Connect with keyFX in social media</p>
                <img alt="Not Available" src="/Fb.svg" />
                <img alt="Not Available" src="/Insta.svg" />
                <img alt="Not Available" src="/Linked.svg" />
            </div>
        </div>
    );
};

export default Footer;