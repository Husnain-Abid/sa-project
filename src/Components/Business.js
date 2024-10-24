import React from 'react';
import Carousel from './Carousel';

const Business = () => {

    const cards = [
        { id: 1, title: 'Card 1', content: (
            <div className='rounded-lg py-10 px-5'>
            <p className='mt-3 roboto text-3xl fw600'>Corporate Cards</p>
            <p className='small'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
            <img alt="Not Found" src="/Corporate Cards.png" />
            </div>

    ) },
        { id: 2, title: 'Card 2', content: (
            <div className='rounded-lg py-10 px-5'>
            <p className='mt-3 roboto text-3xl fw600'>Corporate Cards</p>
            <p className='small'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
            <img alt="Not Found" src="/Corporate Cards.png" />
            </div>

    ) },
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