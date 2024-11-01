import LocalBusinessCard from './Cards/LocalBusiness';
import React, { useEffect, useState } from 'react';
import BarChart from './Cards/barChart';


const Services = () => {
    const [rate, setRate] = useState(1);
    const [payeeRate, setPayeeRate] = useState(1);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true); // Start the animation
            setTimeout(() => {
                setRate((prevRate) => (prevRate === 1 ? 0.46 : 1));
                setPayeeRate((prevRate) => (prevRate === 1 ? '70,000' : '10,000'));
                setAnimate(false);
            }, 1000);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='services mainPage2'>
            <div className='text-center'>
                <p className='small'>L e a r n&ensp;M o r e</p>
                <p className='mt-3 roboto text-6xl fw600'>KeyFX Services</p>
            </div>
            <div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-32'>
                    <div className='lg:order-1 order-2'>
                        <div className='icon-rotate'>
                            <img className='icon-rotate1' alt="Not Found" src="/Icons/payment 1.png" />
                            <img className='icon-rotate2' alt="Not Found" src="/Icons/payment 2.png" />

                        </div>
                        {/* <img alt="Not Found" src="/Component 9.png" /> */}
                        <p className='mt-3 roboto text-3xl fw600'>Payment Services</p>
                        <ul className='blue-list mt-4'>
                            <li>Open a multi-currency account</li>
                            <li>Collect and make payments internationally</li>
                            <li>Convert currencies at real-time rates on our website</li>
                        </ul>
                        <p className='small mt-3'>Streamline your cross-border transactions on one platform. Enjoy <br />bank-beating conversion rates and zero-fee transfers.Experience <br />seamless and secure international payments.</p>
                        <button className='text-l rounded-md btn-p flex items-center gap-1 mt-4'>Explore <i class="bi bi-arrow-right-short text-3xl"></i></button>
                    </div>
                    <div className='lg:order-2 order-1 flex justify-center'>
                        <div className="flex items-center justify-center relative">
                            {/* Background Box */}
                            <div className="v-card absolute top-1 left-10 bg-white rounded-xl p-3 sm:w-80 w-60 h-72 opacity-75 transform translate-x-4 translate-y-4">
                                <h2 className="text-lg font-semibold mb-4 text-green-500 text-center rate-container flex justify-center">
                                    <span className={`rate-value ${animate ? 'animate-slide' : ''}`}>
                                        ${payeeRate}
                                    </span>
                                </h2>
                                <div className="mb-4 flex gap-2 font-10 w-full">
                                    <input
                                        type="text"
                                        placeholder="Payee"
                                        className="w-full p-2 border rounded-md"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Currency / Wallet"
                                        className="w-full p-2 border rounded-md text-small"
                                    />
                                </div>
                                <div className="mb-4 flex gap-2 font-10 w-full">
                                    <input
                                        type="text"
                                        placeholder="Payee"
                                        className="w-full p-2 border rounded-md"
                                    />
                                    
                                </div>
                                <div className="mb-4 flex gap-2 font-10 w-full">
                                    <button className="w-full p-2 border rounded-md bg-[#394375]">
fg
                                    </button>
                                 
                                </div>



                                <div className="currency-symbol top-right">
                                    <span className="text-3xl text-white">£</span>
                                </div>
                            </div>

                            <div className='relative mt-32'>
                                <div className="currency-symbol top-left z-9">
                                    <span className="text-3xl text-white">€</span>
                                </div>
                            <div className="v-card relative bg-white rounded-xl p-6 sm:w-80 w-60 z-10 ">

                                <div className="currency-symbol bottom-right">
                                    <span className="text-3xl text-white font">$</span>
                                </div>

                                <div className="text-center">
                                    <h2 className="text-lg font-semibold mb-4">Convert currencies</h2>
                                    <div className="flex justify-between items-center px-4 py-4 bg-gray-100 rounded-lg mb-4 relative">
                                        <span className="text-lg font-semibold">1</span>
                                        <span className="flex items-center">
                                            <img src="https://flagcdn.com/w320/gb.png" alt="GBP" className="w-6 h-4 ml-2" />
                                            <span className="ml-2">GBP</span>
                                        </span>
                                    </div>
                                    <div className="arrow-icon">
                                        <span>⇅</span>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-4 bg-gray-100 rounded-lg">
                                        <div className="rate-container">
                                            <span className={`rate-value ${animate ? 'animate-slide' : ''}`}>
                                                {rate}
                                            </span>
                                        </div>
                                        <span className="flex items-center">
                                            <img src="https://flagcdn.com/w320/eu.png" alt="EUR" className="w-6 h-4 ml-2" />
                                            <span className="ml-2">EUR</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    <BarChart />
                    <div>
                        <div className='icon-rotate'>
                            <img className='icon-rotate1' alt="Not Found" src="/Icons/exchange1.png" />
                            <img className='icon-rotate2' alt="Not Found" src="/Icons/exchange2.png" />

                        </div>
                        {/* <img alt="Not Found" src="/Component 8.png" /> */}
                        <p className='mt-3 roboto text-3xl fw600'>Foreign Exchange Services</p>
                        <ul className='blue-list mt-4'>
                            <li>Convert 33+ currencies at unbeatable rates</li>
                            <li>Make zero-fee international transfers</li>
                            <li>Lock-in your favorable exchange rate</li>
                        </ul>
                        <p className='small mt-3'>Navigate global markets with confidence. KeyFX offers <br />comprehensive foreign currency services, allowing you to effortlessly <br />manage international transactions and mitigate exchange rate risks.</p>
                        <button className='text-l mt-4 rounded-xl btn-p flex items-center gap-1'>Explore me <i class="bi bi-arrow-right-short text-3xl"></i></button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    <div className='lg:order-1 order-2	'>
                        <div className='icon-rotate'>
                            <img className='icon-rotate1' alt="Not Found" src="/Icons/card1.png" />
                            <img className='icon-rotate2' alt="Not Found" src="/Icons/card2.png" />
                        </div>
                        {/* <img alt="Not Found" src="/Component 7.png" /> */}
                        <p className='mt-3 roboto text-3xl fw600'>Card Services</p>
                        <ul className='blue-list mt-4'>
                            <li>Get debit Mastercard </li>
                            <li>Virtual and physical cards available</li>
                            <li>Real-time bank-beating conversion rates</li>
                        </ul>
                        <p className='small mt-3'>Experience the convenience of secure spending wherever your <br />business takes you. Whether it's virtual cards for online transactions <br />or physical cards for in-person purchases, KeyFX delivers the <br />flexibility and security you deserve, all at no cost to you.</p>
                        <button className='text-l mt-4 rounded-md btn-p flex items-center gap-1'>Explore <i class="bi bi-arrow-right-short text-3xl"></i></button>
                    </div>
                    <div className='lg:order-2 order-1 flex justify-center items-end'>
                        <div className='leftCard'>
                            {/* <img alt="Not Found" src="/cardServices.png" /> */}
                            <div className='relative'>
                                <div class="v-card sm:w-72 w-60 flex flex-col items-center justify-center rounded-3xl">
                                    <div className='icon-rotate'>
                                        <img className='icon-rotate1' alt="Not Found" src="/Icons/card1.png" />
                                        <img className='icon-rotate2' alt="Not Found" src="/Icons/card2.png" />
                                    </div>
                                    <p className='mt-4 card-head-blue'>Virtual card</p>
                                    <p className='text-xs text-gray-500 mt-2'>
                                        secure, temporary, no real details required
                                    </p>
                                    <div className='gray-card mt-3 flex gap-2'>
                                        
                                        <svg width="63"  className='sm:w-14 w-8' height="47" viewBox="0 0 63 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="62" height="46" rx="9.5" fill="#FFC8E2" stroke="#FF9ECC"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4964 31.1099C28.6791 32.6417 26.3218 33.5664 23.7459 33.5664C17.9983 33.5664 13.3389 28.9625 13.3389 23.2832C13.3389 17.6039 17.9983 13 23.7459 13C26.3219 13 28.6792 13.9247 30.4965 15.4566C32.3138 13.9248 34.6711 13.0001 37.247 13.0001C42.9946 13.0001 47.654 17.6041 47.654 23.2833C47.654 28.9626 42.9946 33.5665 37.247 33.5665C34.671 33.5665 32.3137 32.6418 30.4964 31.1099Z" fill="#ED0006"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4964 31.11C32.734 29.2239 34.1529 26.4173 34.1529 23.2833C34.1529 20.1493 32.734 17.3428 30.4964 15.4567C32.3137 13.9248 34.671 13.0001 37.2469 13.0001C42.9946 13.0001 47.654 17.6041 47.654 23.2833C47.654 28.9626 42.9946 33.5665 37.2469 33.5665C34.671 33.5665 32.3137 32.6418 30.4964 31.11Z" fill="#F9A000"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4965 31.1096C32.7341 29.2235 34.1529 26.417 34.1529 23.283C34.1529 20.149 32.7341 17.3425 30.4965 15.4563C28.2588 17.3425 26.84 20.149 26.84 23.283C26.84 26.417 28.2588 29.2235 30.4965 31.1096Z" fill="#FF5E00"/>
                                        </svg>

                                        <div>
                                            <p className='card-head-blue font-10'>Global Ventures Ltd.</p>
                                            <p className='font-10 card-gray-text'>David Leo</p>
                                        </div>

                                    </div>
                                    <div className='gray-card flex gap-2 mt-2'>
                                        <svg className='sm:w-14 w-8' width="63" height="47" viewBox="0 0 63 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="62" height="46" rx="9.5" fill="#2C3667" stroke="#00D2D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4964 31.1099C28.6791 32.6417 26.3218 33.5664 23.7459 33.5664C17.9983 33.5664 13.3389 28.9625 13.3389 23.2832C13.3389 17.6039 17.9983 13 23.7459 13C26.3219 13 28.6792 13.9247 30.4965 15.4566C32.3138 13.9248 34.6711 13.0001 37.247 13.0001C42.9946 13.0001 47.654 17.6041 47.654 23.2833C47.654 28.9626 42.9946 33.5665 37.247 33.5665C34.671 33.5665 32.3137 32.6418 30.4964 31.1099Z" fill="#ED0006" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4961 31.1099C32.7337 29.2237 34.1526 26.4172 34.1526 23.2832C34.1526 20.1492 32.7337 17.3427 30.4961 15.4565C32.3134 13.9247 34.6707 13 37.2466 13C42.9943 13 47.6537 17.6039 47.6537 23.2832C47.6537 28.9625 42.9943 33.5664 37.2466 33.5664C34.6707 33.5664 32.3134 32.6417 30.4961 31.1099Z" fill="#F9A000" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4963 31.1096C32.7339 29.2235 34.1528 26.4169 34.1528 23.2829C34.1528 20.149 32.7339 17.3424 30.4963 15.4563C28.2587 17.3424 26.8398 20.149 26.8398 23.2829C26.8398 26.4169 28.2587 29.2235 30.4963 31.1096Z" fill="#FF5E00" />
                                        </svg>
                                        <div>
                                            <p className='card-head-blue font-10'>Global Ventures Ltd.</p>
                                            <p className='font-10 card-gray-text'>David Leo</p>
                                        </div>

                                    </div>
                                    <div className='experience-card flex gap-2 items-center font-8 roboto py-2 mt-5'>
                                        <svg className='w-24' width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04256 4.59171C0.486328 5.38422 0.486328 7.7399 0.486328 12.4513V14.7715C0.486328 23.0787 6.73207 27.11 10.6508 28.8218C11.7138 29.2862 12.2453 29.5183 13.7471 29.5183C15.2488 29.5183 15.7803 29.2862 16.8433 28.8218C20.762 27.11 27.0078 23.0787 27.0078 14.7715V12.4513C27.0078 7.7399 27.0078 5.38422 26.4515 4.59171C25.8953 3.79921 23.6803 3.04102 19.2504 1.52463L18.4064 1.23573C16.0972 0.445276 14.9426 0.0500488 13.7471 0.0500488C12.5515 0.0500488 11.3969 0.445276 9.08771 1.23573L8.24372 1.52463C3.81377 3.04102 1.5988 3.79921 1.04256 4.59171ZM18.2549 12.5733C18.6614 12.1181 18.6218 11.4195 18.1666 11.0131C17.7113 10.6066 17.0128 10.6461 16.6063 11.1014L12.1684 16.0718L10.8878 14.6376C10.4813 14.1823 9.78278 14.1428 9.32753 14.5492C8.87228 14.9557 8.83274 15.6543 9.23921 16.1095L11.3441 18.467C11.5537 18.7018 11.8536 18.8361 12.1684 18.8361C12.4832 18.8361 12.783 18.7018 12.9927 18.467L18.2549 12.5733Z" fill="#00D2D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0864 9.895C20.6707 10.4474 20.6707 11.343 20.0864 11.8954L13.1047 18.4963C12.5205 19.0487 11.5732 19.0487 10.9889 18.4963L7.99679 15.6673C7.41253 15.1149 7.41253 14.2193 7.99679 13.6669C8.58104 13.1146 9.52831 13.1146 10.1126 13.6669L12.0468 15.4957L17.9707 9.895C18.5549 9.34262 19.5022 9.34262 20.0864 9.895Z" fill="white" />
                                        </svg>
                                        <p>Experience the convenience of secure spending wherever your business takes you.</p>
                                    </div>
                                    <button className='btn-dblue roboto text-white w-full py-2 my-3'>
                                        Continue
                                    </button>

                                </div>
                                <div className='v-card p-2 flex items-center absolute top-20 sm:-right-32 -right-20 rounded-lg'>
                                <svg className='sm:w-14 w-8' width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04256 4.59171C0.486328 5.38422 0.486328 7.7399 0.486328 12.4513V14.7715C0.486328 23.0787 6.73207 27.11 10.6508 28.8218C11.7138 29.2862 12.2453 29.5183 13.7471 29.5183C15.2488 29.5183 15.7803 29.2862 16.8433 28.8218C20.762 27.11 27.0078 23.0787 27.0078 14.7715V12.4513C27.0078 7.7399 27.0078 5.38422 26.4515 4.59171C25.8953 3.79921 23.6803 3.04102 19.2504 1.52463L18.4064 1.23573C16.0972 0.445276 14.9426 0.0500488 13.7471 0.0500488C12.5515 0.0500488 11.3969 0.445276 9.08771 1.23573L8.24372 1.52463C3.81377 3.04102 1.5988 3.79921 1.04256 4.59171ZM18.2549 12.5733C18.6614 12.1181 18.6218 11.4195 18.1666 11.0131C17.7113 10.6066 17.0128 10.6461 16.6063 11.1014L12.1684 16.0718L10.8878 14.6376C10.4813 14.1823 9.78278 14.1428 9.32753 14.5492C8.87228 14.9557 8.83274 15.6543 9.23921 16.1095L11.3441 18.467C11.5537 18.7018 11.8536 18.8361 12.1684 18.8361C12.4832 18.8361 12.783 18.7018 12.9927 18.467L18.2549 12.5733Z" fill="#00D2D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0864 9.895C20.6707 10.4474 20.6707 11.343 20.0864 11.8954L13.1047 18.4963C12.5205 19.0487 11.5732 19.0487 10.9889 18.4963L7.99679 15.6673C7.41253 15.1149 7.41253 14.2193 7.99679 13.6669C8.58104 13.1146 9.52831 13.1146 10.1126 13.6669L12.0468 15.4957L17.9707 9.895C18.5549 9.34262 19.5022 9.34262 20.0864 9.895Z" fill="white" />
                                        </svg>
                                        <p className='card-head-blue'>Physical card</p>

                                </div>
                            </div>
                            {/* <img alt="Not Found" className='PhysicalCard' src="/PhysicalCard.png" /> */}
                        </div>
                        <div className='rightCard'>
                            <div class="bloc">
                                <div class="foil-image">
                                    <div>
                                        <img src="/AtmCard.png" />
                                    </div>
                                </div>
                            </div>
                            {/* <div class="shine"></div>
                    <img alt="Not Found" src="/AtmCard.png" /> */}
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    <div className='justify-center flex mb-5'>
                <LocalBusinessCard />
                        {/* <img alt="Not Found" src="/Local Business Bank Accounts.svg" /> */}
                        </div>
                    <div>

                        <div className='icon-rotate'>
                            <img className='icon-rotate1' alt="Not Found" src="/Icons/lb1.png" />
                            <img className='icon-rotate2' alt="Not Found" src="/Icons/lb2.png" />
                        </div>
                        {/* <img alt="Not Found" src="/Component 10.png" /> */}
                        <p className='mt-3 roboto text-3xl fw600'>Local Business Bank Accounts</p>
                        <ul className='blue-list mt-4 flex justify-between sm-col'>
                            <li>GBP Account </li>
                            <li>EUR Account</li>
                            <li>USD Account</li>
                        </ul>
                        <p className='small mt-3'>Operate your business like a local on a global scale with GBP, EUR, <br />and USD accounts from KeyFX. Access dedicated accounts in key <br />markets, enabling seamless transactions and eliminating the <br />complexities of cross-border banking.</p>
                        <button className='text-l mt-4 rounded-md btn-p flex items-center gap-1'>Explore <i class="bi bi-arrow-right-short text-3xl"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;