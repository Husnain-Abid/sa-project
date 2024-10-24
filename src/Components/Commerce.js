import React from 'react';

const Commerce = () => {

    const comm = [
        {id:1 , title:'Unified Banking Services' , img:'./bank.png' , desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.'},
        {id:2 , title:'Personalized Global Support' , img:'./Personalized Global Support.svg' , desc: 'Our reach is worldwide but our service is tailored. We provide dedicated support to help you navigate the intricacies of the global financial landscape.'},
        {id:3 , title:'Competitive Rates' , img:'./Competitive Rates.svg' , desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.'},
        {id:4 , title:'Streamlined Cross-Border Payments' , img:'./Streamlined Cross-Border Payments.png' , desc: 'With KeyFX, boundaries blur as you effortlessly send and receive payments worldwide, fueling international trade and services.'},
        {id:5 , title:'Optimized FX Solutions' , img:'./Optimized FX Solutions.svg' , desc: 'Benefit from superior foreign exchange rates. Our solutions are designed to minimize conversion costs and to smartly manage foreign exchange risk.'},
        {id:6 , title:'Unified Banking Services' , img:'./bank.png' , desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.'},
    ];

    return (
        <div className='pt-48 proposition-card pb-32 lg:px-0 px-10'>
            <div className='text-center mainPage'>
                <p className='small'>Servers</p>
                <p className='mt-3 roboto text-6xl fw600'>Empowering Global Commerce</p>
                <p className='small text-lg mt-3 lg:px-32'>At KeyFX, we pave the way for seamless international commerce through advanced financial technology. Our comprehensive platform is the cornerstone for businesses big and small, simplifying and securing global transactions. Here's how we stand out:</p>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-32'>
                {comm.map(
                    commerce => (
                        <div className='py-12 px-5 mx-2 bg-white rounded-xl shadow-sm'>
                        <img alt="Not Found" src={commerce.img} />
                        <p className='roboto fw600 text-xl'>{commerce.title}</p>
                        <p className='small'>{commerce.desc}</p>
                    </div>
                            
                    )
                )}
            </div>
        </div>
    );
};

export default Commerce;