import React, { useEffect, useState } from 'react';
import TransactionsImg from './Cards/TransactionsImg';
import Payto from './Cards/Payto';
import Lisence from './Cards/Lisence';
import Veri from './Cards/Veri';
const Support = () => {

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
            <div className='support-card'>
                <div className='text-center '>
                    <p className='small'>Support</p>
                    <p className='mt-3 roboto text-4xl fw600'>We are here to help you</p>
                    <p className=' roboto text-4xl fw600 text-grad '>24/7, every day of the week.</p>
                    <p className='small'>Chat to us in app any time, or call or email if you'd prefer,<br />We'll answer your questions and help solve any problems you have,<br />No need for branches, and no need to make an appointment</p>
                </div>
            </div>
            <div className='py-32 mainPage2 hit-bg'>
                <div className='text-center '>
                    <p className='small'>L e a r n&ensp;M o r e </p>
                    <p className='mt-3 roboto text-4xl fw600'>How it works</p>
                </div>
                <div className={`lg:px-0 sm:px-24   ${isMobile ? " px-0 mt-10" : " px-10 mt-14"}`}>
                    <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className='lg:order-1 order-2 mt-auto'>
                            <button className='step1 rounded-full py-2 px-4'>Step 1</button>
                            <p className='mt-3 roboto text-3xl fw600'>Sign up online</p>
                            <p className={`${isMobile ? "small " : " mt-[15px] leading-[30px] text-[#7680B0] text-[16px] w-11/12"}`}>To sign up online at keyfx, simply navigate to the registration page. There, you will need to fill in the required information such as your name, email, and password. After completing the form, click the "Sign Up" button. </p>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            <div class="bloc mx-auto my-3">
                                <Lisence />
                            </div>
                            {/* <img alt='not available' src='/Sign up online.png' /> */}
                        </div>
                    </div>
                    <div className={`grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 ${isMobile ? 'mt-5' : '  mt-20'} `}>
                        <div className='lg:order-1 order-2 my-auto'>
                            <button className='step2 rounded-full py-2 px-4'>Step 2</button>
                            <p className='mt-3 roboto text-3xl fw600'>Get verified immediately</p>
                            <p className={`${isMobile ? "small " : " mt-[15px] leading-[30px] text-[#7680B0] text-[16px] w-11/12"}`}>To get verified immediately on keyfx, log in to your account, navigate to the verification section, and upload the required documents (such as your ID and proof of address). </p>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            {/* <img alt='not available' src='/Get verified instantly.png' /> */}
                            <div className='mx-auto my-3'>
                                <Veri />
                            </div>
                        </div>
                    </div>
                    <div className={`grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 ${isMobile ? 'mt-5' : '  mt-32'} `}>
                        <div className='lg:order-1 order-2 my-auto'>
                            <button className='step2 rounded-full py-2 px-4'>Step 3</button>
                            <p className='mt-3 roboto text-3xl fw600'>Easily fund your account</p>
                            <p className={`${isMobile ? "small " : " mt-[15px] leading-[30px] text-[#7680B0] text-[16px] w-11/12"}`}>To easily fund your account on keyfx, log in, go to the "Deposit" section, select your preferred payment method, enter the deposit amount, and provide the necessary payment details. </p>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            <div className='mx-auto pb-5'>
                                <Payto />
                            </div>
                            {/* <img alt='not available' src='/Easily fund your account.png' /> */}
                        </div>
                    </div>
                    <div className={`grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 ${isMobile ? 'mt-5' : '  mt-20'} `}>
                        <div className='lg:order-1 order-2 my-auto'>
                            <button className='step2 rounded-full py-2 px-4'>Step 4</button>
                            <p className='mt-3 roboto text-4xl fw600'>Start making transactions</p>
                            <ul className='blue-list blackLi mt-3'>
                                <li>Choose Transaction Type</li>
                                <li>Select Assets you want to transact with.</li>
                                <li>Enter Amount for the transaction.</li>
                                <li>Review and Confirm the transaction.</li>
                                <li>Check your transaction history to monitor your activities.</li>
                            </ul>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            <div className='mx-auto my-3'>
                                <TransactionsImg />
                            </div>
                            {/* <img alt='not available' src='/Start making transactions.svg' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;