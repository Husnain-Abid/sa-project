import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const Solution = () => {
    const cards = [
        {
            id: 1, title: 'Card 1', content: (<div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                <div>
                    <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                </div>
                <div>
                    <p className='fw600 text-gray text-left pb-5'>KeyFX has transformed the way we handle international payments. Their service is fast, reliable, and cost-effective.</p>
                    <div className='mt-10 flex gap-3 items-center'>
                        <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg' />
                        <div>
                            <p className='fw600 text-black'>Sarah T</p>
                            <p className='small text-left'>Ceo</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        },
        {
            id: 2, title: 'Card 1', content: (<div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                <div>
                    <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                </div>
                <div>
                    <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                    <div className='mt-10 flex gap-3 items-center'>
                        <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg' />
                        <div>
                            <p className='fw600 text-black'>Sarah T</p>
                            <p className='small text-left'>Ceo</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        },
        {
            id: 3, title: 'Card 1', content: (<div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                <div>
                    <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                </div>
                <div>
                    <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                    <div className='mt-10 flex gap-3 items-center'>
                        <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg' />
                        <div>
                            <p className='fw600 text-black'>Sarah T</p>
                            <p className='small text-left'>Ceo</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        },
        {
            id: 4, title: 'Card 1', content: (<div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                <div>
                    <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                </div>
                <div>
                    <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                    <div className='mt-10 flex gap-3 items-center'>
                        <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg' />
                        <div>
                            <p className='fw600 text-black'>Sarah T</p>
                            <p className='small text-left'>Ceo</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        },
        {
            id: 5, title: 'Card 1', content: (<div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                <div>
                    <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                </div>
                <div>
                    <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                    <div className='mt-10 flex gap-3 items-center'>
                        <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg' />
                        <div>
                            <p className='fw600 text-black'>Sarah T</p>
                            <p className='small text-left'>Ceo</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        },
    ]


    const sectionData = {
        heading: "What they said about KeyFX? Solutions for<br />Businesses",
        para: "We go the extra mile. The Key.fx system is designed to make it easier for users to make any payments.",
    }

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
        <div className='pt-48'>
            <div className='business-card'>
                <p className={`text-grad roboto text-l fw600 ${isMobile ? "px-[2px] pt-[5px]" : "px-[100px] pt-[80px]"} `}>Customer Testimonials</p>

                <div className=''>
                    <Carousel heading={sectionData.heading} para={sectionData.para} cards={cards} />
                </div>
            </div>


            <div className='grad-line'></div>
        </div>
    );
};

export default Solution;