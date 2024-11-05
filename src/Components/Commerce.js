import React, { useEffect, useRef } from 'react';

const Commerce = () => {
    const comm = [
        { id: 1, title: 'Unified Banking Services', img: './bank.png', desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.' },
        { id: 2, title: 'Personalized Global Support', img: './Personalized Global Support.svg', desc: 'Our reach is worldwide but our service is tailored. We provide dedicated support to help you navigate the intricacies of the global financial landscape.' },
        { id: 3, title: 'Competitive Rates', img: './Competitive Rates.svg', desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.' },
        { id: 4, title: 'Unified Banking Services', img: './bank.png', desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.' },
    ];
    const rowtwo = [
        { id: 3, title: 'Competitive Rates', img: './Competitive Rates.svg', desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.' },
        { id: 4, title: 'Streamlined Cross-Border Payments', img: './Streamlined Cross-Border Payments.png', desc: 'With KeyFX, boundaries blur as you effortlessly send and receive payments worldwide, fueling international trade and services.' },
        { id: 5, title: 'Optimized FX Solutions', img: './Optimized FX Solutions.svg', desc: 'Benefit from superior foreign exchange rates. Our solutions are designed to minimize conversion costs and to smartly manage foreign exchange risk.' },
        { id: 6, title: 'Unified Banking Services', img: './bank.png', desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.' },
    ];
    const sliderRef = useRef(null);

    useEffect(() => {
      if (sliderRef.current) {
        const clone = sliderRef.current.cloneNode(true);
        sliderRef.current.parentNode.appendChild(clone);
      }
    }, []);
    const sliderReftwo = useRef(null);

    useEffect(() => {
      if (sliderReftwo.current) {
        const clone = sliderReftwo.current.cloneNode(true);
        sliderReftwo.current.parentNode.appendChild(clone);
      }
    }, []);

    return (
        <div className={`pt-48 proposition-card pb-32 lg:px-0 px-10`}>
            <div className='text-center mainPage'>
                <p className=' text-teal-400'>Servers</p>
                <p className='mt-3 roboto text-6xl fw600'>Empowering Global Commerce</p>
                <p className='small text-lg mt-3 lg:px-32'>
                    At KeyFX, we pave the way for seamless international commerce through advanced financial technology. Our comprehensive platform is the cornerstone for businesses big and small, simplifying and securing global transactions. Here's how we stand out:
                </p>
            </div>
            <div className='customCarousle'>
            <div class="logo-slider">
                <div class="logos-slide" ref={sliderRef}>
                    
                     {comm.map((commerce , index) => (
                            <div className={`slide z-99 ${index === rowtwo.length - 1 ? 'opacity-0' : ''}`}>
                            <div className="carousel-item" key={commerce.id}>
                                <div className=' w-full mx-5 min-w-400'>
                                    <div className='v-card3'>
                                        <div className=' shadowed-di'></div>
                                        <div className=' v-card SliderBoxShadow py-12 px-5 min-w-400 rounded-xl text-wrap border-1'>
                                            <img alt="Not Found" src={commerce.img} />
                                            <p className='roboto fw600 text-xl'>{commerce.title}</p>
                                            <p className='small'>{commerce.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            ))}
                    
                </div>
            </div>
            </div>
            <div className='customCarousle'>
            <div class="logo-slider">
                <div class="logos-slide" ref={sliderReftwo}>
                    
                     {rowtwo.map((commerce, index) => (
                            <div className={`slide z-99 ${index === rowtwo.length - 1 ? 'opacity-0' : ''}`}>
                                    <div className="carousel-item" key={commerce.id}>
                                        <div className=' w-full mx-5 min-w-400'>
                                        <div className='v-card3'>
                                        <div className=' shadowed-di'></div>
                                        <div className=' v-card SliderBoxShadow py-12 px-5 min-w-400 rounded-xl text-wrap border-1'>
                                            <img alt="Not Found" src={commerce.img} />
                                            <p className='roboto fw600 text-xl'>{commerce.title}</p>
                                            <p className='small'>{commerce.desc}</p>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                            </div>
                    ))}
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Commerce;
