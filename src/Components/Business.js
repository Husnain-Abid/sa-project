import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const Business = () => {


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
  




    const cards = [
        {
            id: 1, title: 'Card 1', content: (
                <div className={`rounded-lg  ${isMobile ? "py-3 px-3" : "py-2 px-3"} `}>
                    <p className={`${isMobile ? " mt-0" : " mt-3"} roboto text-3xl fw600`}>Corporate Cards</p>
                    <p className='small mt-2'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
                    <div className=' flex items-center sm:gap-4 gap-2 corpCard-anim '>
                        <div className='relative corpDiv upsideDiv'>
                            <img className='absolute sm:bottom-10 bottom-3 sm:left-3 left-0 corp1 sm:w-52 w-32 Card1Img ' alt="Not Found" src="/Icons/corpmasterCard.png" />
                            <img className='relative z-10 corp2 top15' alt="Not Found" src="/Icons/corpCard.png" />
                        </div>
                        <div>
                            <img alt="Not Found" src="/Icons/corpArrows.png" />
                        </div>
                        <div className='corpDiv2 upsideDiv'>
                            <img className='corp4' alt="Not Found" src="/Icons/corp4.png" />
                        </div>
                    </div>
                    {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
                </div>
            )
        },
        {
            id: 2, title: 'Card 2', content: (
                <div className={`rounded-lg  ${isMobile ? "py-3 px-3" : "py-2 px-3"} `}>
                    <p className={`${isMobile ? " mt-0" : " mt-3"} roboto text-3xl fw600`}>Corporate Cards</p>
                    <p className='small mt-2'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
                    {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
                    <div className='local-acc-card grid grid-cols-7'>
                        <div className='flex flex-col col-span-3 relative z-30 justify-center'>
                            <div className='bg-white shadow-inner shade1 p-2 rounded-sm flex items-center gap-2'>
                                <div className='gbp p-2 roboto rounded-md '>
                                    GBP
                                </div>
                                <p className='font-10'>Get GBP account</p>
                            </div>
                            <div className='bg-white shadow-inner shade1 p-2 rounded-sm flex items-center gap-2'>
                                <div className='usd p-2 roboto rounded-md'>
                                    USD
                                </div>
                                <p className='font-10'>Get USD account</p>
                            </div>
                            <div className='bg-white shadow-inner shade1 p-2 rounded-sm flex items-center gap-2'>
                                <div className='eur roboto p-2 rounded-md'>
                                    EUR
                                </div>
                                <p className='font-10'>Get EUR account</p>
                            </div>
                        </div>
                        <div className='col-span-1 flex items-center relative z-20 h-full'>
                            <img className='absolute local-arrow  h-24' alt="Not Found" src="/Icons/middleArrow.png" />
                        </div>
                        <div className='col-span-3 relative z-10 flex items-end'>
                            <img className='local-img' alt="Not Found" src="/Icons/localAccountimg.png" />
                        </div>
                    </div>
                </div>

            )
        },
        {
            id: 2, title: 'Card 2', content: (
                <div className={`rounded-lg  ${isMobile ? "py-3 px-3" : "py-2 px-3"} `}>
                    <p className={`${isMobile ? " mt-0" : " mt-3"} roboto text-3xl fw600`}>Global Multi-Currency Account</p>
                    <p className='small mt-2'>Manage your finances globally with an account that supports up to 33 currencies. Pay and get paid in your chosen currency with ease.</p>
                    {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
                    <div className='local-acc-card local-acc-card2 grid grid-cols-6 mt-14'>
                        <div className='col-span-3 relative z-10 flex items-start'>
                            <img className='local-img2' alt="Not Found" src="/pcard2.png" />
                        </div>
                        <div className='col-span-3 relative z-10 flex items-end'>
                            <img className='local-img3' alt="Not Found" src="/pcard1.png" />
                        </div>
                    </div>
                </div>

            )
        },
    ];


    const sectionData = {
        heading: "Comprehensive Solutions for Businesses",
    }


    return (
        <div className=''>
            <div className='text-start '>
                <p className={`small ${isMobile ? "px-2 pt-5" : "px-[100px] pt-[80px]"}   `}>M u l t i p l e&ensp;P l a t f o r m s</p>
            </div>
            <div>
                <Carousel cards={cards} heading={sectionData.heading}  />
            </div>
            {/* <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5  '>
                <div className='rounded-lg business-csr-card py-10 px-5'>
                <p className='mt-3 roboto text-3xl fw600'>Corporate Cards</p>
                <p className='small'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
                <img alt="Not Found" src="/Corporate Cards.png" />
                </div>
            </div> */}
        </div>
    );
};

export default Business;