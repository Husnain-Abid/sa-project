import React from 'react';
import Carousel from './Carousel';

const Business = () => {

    const cards = [
        {
            id: 1, title: 'Card 1', content: (
                <div className='rounded-lg py-10 px-5'>
                    <p className='mt-3 roboto text-3xl fw600'>Corporate Cards</p>
                    <p className='small'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
                    <div className=' flex items-center sm:gap-4 gap-2 corpCard-anim'>
                        <div className='relative corpDiv'>
                            <img className='absolute sm:bottom-10 bottom-3 sm:left-3 left-0 corp1 sm:w-52 w-32' alt="Not Found" src="/Icons/corpmasterCard.png" />
                            <img className='relative z-10 corp2' alt="Not Found" src="/Icons/corpCard.png" />
                        </div>
                        <div>
                            <img alt="Not Found" src="/Icons/corpArrows.png" />
                        </div>
                        <div className='corpDiv2'>
                            <img className='corp4' alt="Not Found" src="/Icons/corp4.png" />
                        </div>
                    </div>
                    {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
                </div>
            )
        },
        {
            id: 2, title: 'Card 2', content: (
                <div className='rounded-lg py-10 px-5'>
                    <p className='mt-3 roboto text-3xl fw600'>Corporate Cards</p>
                    <p className='small'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
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
    ];

    return (
        <div className='pt-48 mainPage'>
            <div className='text-start '>
                <p className='small'>M u l t i p l e&ensp;P l a t f o r m s</p>
                <p className='mt-4 roboto text-6xl fw600'>Comprehensive Solutions for Businesses</p>
            </div>
            <div>
                <Carousel cards={cards} />
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