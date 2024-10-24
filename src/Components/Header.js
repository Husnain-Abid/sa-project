import React from 'react';
import Converter from './Converter';
import World from './WorldTour';
import Carousel from './Carousel';
const Header = () => {
    return (
    <div>
        <div className='flex justify-center mainPage'>
            <div className='mt-10 pt-5 text-center w-700'>
                <p className='text-grad roboto text-6xl fw600'>Empowering</p>
                <p className='mt-3 roboto text-6xl fw600'>Your Business Globally</p>
                <p className='mt-3 text-xl'>Your One-Stop for <b>International Payments, Currency Exchange,</b> and <b>Cards</b></p>
                <div className='flex sm:flex-row flex-col gap-4 justify-center mt-3'>
                    <button className='text-l btn rounded-full btn-p flex items-center justify-center gap-1'>Open Account <i class="bi bi-arrow-right-short text-3xl"></i></button>
                    <button className=' text-l btn btn-ot rounded-full'>Talk to Our Team</button>
                </div>
            </div>
        </div>
            <World />
            <Converter />
            {/* <Carousel /> */}
    </div>
    );
};

export default Header;