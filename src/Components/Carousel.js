import React, { useEffect, useState } from 'react';
import '../Css/Carousel.css'; // Import your CSS file for styling

const Carousel = ({ cards, heading, para }) => {  // Corrected how props are accessed
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 1; // Number of cards to show at once
  const totalCards = cards.length;

  const next = () => {
    if (currentIndex + cardsToShow < totalCards) {
      setCurrentIndex(currentIndex + cardsToShow);
    }
  };

  const prev = () => {
    if (currentIndex - cardsToShow >= 0) {
      setCurrentIndex(currentIndex - cardsToShow);
    }
  };


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Set initial value based on screen width
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div>
      <div className={` ${isMobile ? "flex flex-col  w-full gap-4 px-2 " : " flex justify-between w-full gap-4 px-[100px] "} `}>

        <div>

          <p
            className="roboto text-4xl leading-[60px] fw600"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></p>


          <p className='text-[#D5DAEF] leading-[28px]'>{para}</p>

        </div>


        <div className='flex items-end'>

          <button
            className={`step2 w-10 h-10 rounded-full mr-2 ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className={`step1 w-10 h-10 rounded-full  ${currentIndex + cardsToShow >= totalCards ? 'disabled' : ''}`}
            onClick={next}
            disabled={currentIndex + cardsToShow >= totalCards}
          >
            <i className="bi bi-chevron-right"></i>
          </button>


        </div>


      </div>

      <div className="carousel-container overflow-hidden">
        <div className="carousel">
          <div
            className={`card-container flex transition-transform duration-500  ${isMobile ? "py-10 ps-2  gap-2" : "py-16 ps-20  gap-4"}`}
            style={{ transform: `translateX(-${(currentIndex / totalCards) * 100}%)` }}
          >
            {cards.map(card => (
              <div key={card.id} className="card p-0 m-0">

                <>{card.content}</>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
