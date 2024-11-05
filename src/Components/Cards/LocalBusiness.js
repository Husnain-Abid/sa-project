import React, { useState } from 'react';

import './css/localbusinesscard.css';

const LocalBusinessCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
<div class="tree">
	<ul className='cstomUl'>
    <li
                className={`parent pt-4 flex justify-center flex-col items-center ${isHovered ? 'custom-hover-class' : ''}`}
                onClick={() => setIsHovered(!isHovered)}
            >
        <div class="background-shadow"></div>
			<a className='child1 flex justify-center flex-col items-center gap-3' >
            <div className='icon-rotate flex justify-center'>
                    <img className='icon-rotate1' alt="Not Found" src="/Icons/lcbHome.png" />
                    <img className='icon-rotate2new' alt="Not Found" src="/Icons/lcb2.png" />
                    </div>
                    <p className='font-bold roboto text-black w-3/4 '>Local Business Bank Accounts</p>
                    <div className='relative w-28 h-8'>
                        <div className='flex justify-center mx-auto w-28 h-8'>
                        <img className='icon-rotate1 absolute w-24 h-24 -bottom-12 z-20' alt="Not Found" src="/Icons/middle-img.png" />
                        </div>
                    </div>
                </a>
			<ul>
				<li className=''>
					<a className='child2 flex items-center'>
                            <input className={`check-lcb ${isHovered ? 'custom-checkbox' : ''}`}  checked={isHovered}  type='checkbox' />
                            <p className='font-bold curr-text roboto br-gray py-1 px-2'>$4,300</p>
                            <div className='flex items-center'>
                                <img className='w-4 h-4 rounded-full' alt='Not Available' src='/Icons/middle-img.png' />
                                <p className='font-8'>USD</p>
                            </div>
                    </a>
				</li>
				<li className='middle-child'>
                <a className='child2 flex items-center'>
                            <input className={`check-lcb ${isHovered ? 'custom-checkbox' : ''}`}  checked={isHovered} type='checkbox' />
                            <p className='font-bold curr-text roboto br-gray py-1 px-2'>€24.30</p>
                            <div className='flex items-center'>
                                <img className='w-4 h-4 rounded-full' alt='Not Available' src='/Icons/middle-img.png' />
                                <p className='font-8'>EUR</p>
                            </div>
                </a>

				</li>
				<li>
                <a className='child2 flex items-center'>
                            <input className={`check-lcb ${isHovered ? 'custom-checkbox' : ''}`}  checked={isHovered}  type='checkbox' />
                            <p className='font-bold curr-text roboto br-gray py-1 px-2'>£8,172</p>
                            <div className='flex items-center'>
                                <img className='w-4 h-4 rounded-full' alt='Not Available' src='/Icons/middle-img.png' />
                                <p className='font-8'>GBP</p>
                            </div>
                    </a>

				</li>
			</ul>
		</li>
	</ul>
</div>
</>
    );
  };
  
  export default LocalBusinessCard;