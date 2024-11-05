import React from 'react';
import Carousel from './Carousel';

const Solution = () => {
  const cards = [
    { id: 1, title: 'Card 1', content: (                   <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                        <div>
                            <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                        </div>
                        <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX has transformed the way we handle international payments. Their service is fast, reliable, and cost-effective.</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'  src='/testImgCar.jpg' />
                            <div>
                                <p className='fw600 text-black'>Sarah T</p>
                                <p className='small text-left'>Ceo</p>
                            </div>
                        </div>
                        </div>
                    </div>
) },
    { id: 2, title: 'Card 1', content: (                   <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                        <div>
                            <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                        </div>
                        <div>
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'  src='/testImgCar.jpg' />
                            <div>
                                <p className='fw600 text-black'>Sarah T</p>
                                <p className='small text-left'>Ceo</p>
                            </div>
                        </div>
                        </div>
                    </div>
) },
    { id: 3, title: 'Card 1', content: (                   <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                        <div>
                            <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                        </div>
                        <div>
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'  src='/testImgCar.jpg' />
                            <div>
                                <p className='fw600 text-black'>Sarah T</p>
                                <p className='small text-left'>Ceo</p>
                            </div>
                        </div>
                        </div>
                    </div>
) },
    { id: 4, title: 'Card 1', content: (                   <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                        <div>
                            <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                        </div>
                        <div>
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'  src='/testImgCar.jpg' />
                            <div>
                                <p className='fw600 text-black'>Sarah T</p>
                                <p className='small text-left'>Ceo</p>
                            </div>
                        </div>
                        </div>
                    </div>
) },
    { id: 5, title: 'Card 1', content: (                   <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                        <div>
                            <img alt="Not Found" className='mt-2 w-12' src="/“.png" />
                        </div>
                        <div>
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'  src='/testImgCar.jpg' />
                            <div>
                                <p className='fw600 text-black'>Sarah T</p>
                                <p className='small text-left'>Ceo</p>
                            </div>
                        </div>
                        </div>
                    </div>
) },
  ]

    return (
        <div className='pt-48'>
            <div className='business-card'>
                <p className='text-grad roboto text-l fw600'>Customer Testimonials</p>
                <p className=' roboto text-4xl fw600 mt-3'>What they said about KeyFX? Solutions for Businesses</p>
                <p className='mt-4'>We go the extra mile. The Key.fx system is designed to make it easier for users to make any payments.</p>
            
                <div className=''>
                    <Carousel cards={cards} />
                </div>
            </div>


            <div className='grad-line'></div>
        </div>
    );
};

export default Solution;