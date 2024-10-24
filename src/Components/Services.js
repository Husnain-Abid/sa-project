import React from 'react';

const Services = () => {
    return (
        <div className='services mainPage2'>
            <div className='text-center'>
                <p className='small'>L e a r n&ensp;M o r e</p>
                <p className='mt-3 roboto text-6xl fw600'>KeyFX Services</p>
            </div>
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-32'>
                <div className='lg:order-1 order-2	'>
                    <img alt="Not Found" src="/Component 9.png" />
                    <p className='mt-3 roboto text-3xl fw600'>Payment Services</p>
                    <ul className='blue-list mt-4'>
                        <li>Open a multi-currency account</li>
                        <li>Collect and make payments internationally</li>
                        <li>Convert currencies at real-time rates on our website</li>
                    </ul>
                    <p className='small mt-3'>Streamline your cross-border transactions on one platform. Enjoy <br />bank-beating conversion rates and zero-fee transfers.Experience <br />seamless and secure international payments.</p>
                    <button className='text-l rounded-md btn-p flex items-center gap-1 mt-4'>Explore <i class="bi bi-arrow-right-short text-3xl"></i></button>
                </div>
                <div className='lg:order-2 order-1		flex justify-center'><img alt="Not Found" src="/paymentServices.png" /></div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='	flex justify-center'><img alt="Not Found" src="/exchangeServices.png" /></div>
                <div>
                    <img alt="Not Found" src="/Component 8.png" />
                    <p className='mt-3 roboto text-3xl fw600'>Foreign Exchange Services</p>
                    <ul className='blue-list mt-4'>
                        <li>Convert 33+ currencies at unbeatable rates</li>
                        <li>Make zero-fee international transfers</li>
                        <li>Lock-in your favorable exchange rate</li>
                    </ul>
                    <p className='small mt-3'>Navigate global markets with confidence. KeyFX offers <br />comprehensive foreign currency services, allowing you to effortlessly <br />manage international transactions and mitigate exchange rate risks.</p>
                    <button className='text-l mt-4 rounded-md btn-p flex items-center gap-1'>Explore me <i class="bi bi-arrow-right-short text-3xl"></i></button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='lg:order-1 order-2	'>
                    <img alt="Not Found" src="/Component 7.png" />
                    <p className='mt-3 roboto text-3xl fw600'>Card Services</p>
                    <ul className='blue-list mt-4'>
                        <li>Get debit Mastercard </li>
                        <li>Virtual and physical cards available</li>
                        <li>Real-time bank-beating conversion rates</li>
                    </ul>
                    <p className='small mt-3'>Experience the convenience of secure spending wherever your <br />business takes you. Whether it's virtual cards for online transactions <br />or physical cards for in-person purchases, KeyFX delivers the <br />flexibility and security you deserve, all at no cost to you.</p>
                    <button className='text-l mt-4 rounded-md btn-p flex items-center gap-1'>Explore <i class="bi bi-arrow-right-short text-3xl"></i></button>
                </div>
                <div className='lg:order-2 order-1	flex justify-center'><img alt="Not Found" src="/cardServices.png" /></div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='	flex justify-center'><img alt="Not Found" src="/Local Business Bank Accounts.svg" /></div>
                <div>
                    <img alt="Not Found" src="/Component 10.png" />
                    <p className='mt-3 roboto text-3xl fw600'>Local Business Bank Accounts</p>
                    <ul className='blue-list mt-4 flex justify-between sm-col'>
                        <li>GBP Account </li>
                        <li>EUR ACcount</li>
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