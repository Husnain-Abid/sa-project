import React from 'react';

const Footer = () => {
    return (
        <div className='mainPage2 pb-32'>
            <div>
            <img alt="Not Found" src='/logo.png'/>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2'>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Key.FX</p>

                    <a className='mt-4 roboto text-sm'>About Us</a>
                    <a className='mt-2 roboto text-sm'>Why Key.FX ?</a>
                    <a className='mt-2 roboto text-sm'>Pricing</a>
                    <a className='mt-2 roboto text-sm'>Blog</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Features</p>

                    <a className='mt-4 roboto text-sm'>Features 1</a>
                    <a className='mt-2 roboto text-sm'>Features 2</a>
                    <a className='mt-2 roboto text-sm'>Features 3</a>
                    <a className='mt-2 roboto text-sm'>Features 4</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Support</p>

                    <a className='mt-4 roboto text-sm'>Terms of Service</a>
                    <a className='mt-2 roboto text-sm'>Privacy and Cookie Policy</a>
                    <a className='mt-2 roboto text-sm'>FAQ</a>
                    <a className='mt-2 roboto text-sm'>Complaint form</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text-lg'>Contact us</p>

                    <a className='mt-4 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Phone Calling Rounded.svg' />0800-002-9331</a>
                    <a className='mt-2 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Letter.svg' />info@keyfx.co.uk</a>
                    <a className='mt-2 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Clock Circle.svg' />9am-5pm Mon - Fri</a>
                    <a className='mt-2 roboto text-sm flex items-center gap-2'><img alt='Not Available' src='/Streets Map Point.svg' />128 City Road, London, EC1V 2NX</a>
                </div>
            </div>
            <div className='border-line'>

            </div>
            <div className='flex items-center sm-col gap-4'>
                <img className='xl:w-40 ' src="/LCCI 1.svg" alt='Not Available' />
                <p className='text-xxs roboto'>KeyFX registered in the United Kingdom under registration number 12994112, (128 City Road, London, United Kingdom, EC1V 2NX) and is an appointed representative and distributor for The Payment Firm Ltd t/a The PayFirm Ltd. Registered office: 5 Jewry St, London, EC3N 2EX. Registered in England and Wales. Registered number: 12483085.The Payment Firm Ltd is authorised and regulated by the Financial Conduct Authority Reference number 901084 as a Payment services / Authorised Electronic Money Institution which stipulates the rights and obligations for both payment service providers and users, how to authorise and execute transactions, liability in case of unauthorised use of payment instruments, refunds on payments, payment orders,, value dating of payments and safeguarding client money.</p>
            </div>
            <div className='flex my-4 gap-3'>
                <p className='roboto'>Connect with keyFX in social media</p>
                <img alt="Not Available" src="/Fb.svg" />
                <img alt="Not Available" src="/Insta.svg" />
                <img alt="Not Available" src="/Linked.svg" />
            </div>
        </div>
    );
};

export default Footer;