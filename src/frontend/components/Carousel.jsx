/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => {
  const [mousePosition, setMousePosition] = useState(0);
  const [carrouselPosition, setCarrouselPosition] = useState(0);

  useEffect(() => {
    const carouselNode = document.querySelector('.carousel');
    const carouselContainerNode = document.querySelector(
      '.carousel__container',
    );
    const carrouselBoxWidth = carouselNode.offsetWidth;
    const carrouselContainerTotalWidth = carouselContainerNode.scrollWidth;
    let interval;

    if (mousePosition.x <= 100 && mousePosition.x >= 20) {
      console.log('seting interval');
      if (carrouselPosition !== 0) {
        interval = setInterval(() => {
          setCarrouselPosition(carrouselPosition => carrouselPosition + 1);
        }, 2000);
      }
    } else {
      console.log('cleaning interval');
      clearInterval(interval);
    }

    if (mousePosition.x >= carrouselBoxWidth - 100) {
      setCarrouselPosition(carrouselPosition - 1);
      // setInterval(() => {
      // }, 2000);
    }
  });

  // eslint-disable-next-line arrow-parens
  const handleSlideCarousel = direction => {
    if (direction === 'left') {
      setCarrouselPosition(carrouselPosition - 200);
    } else {
      setCarrouselPosition(carrouselPosition + 200);
    }
  };

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <animated.section
      className='carousel'
      style={fade}
      // onMouseMove={e => setMousePosition({ x: e.clientX, y: e.clientY })}
      // onMouseOut={() => setMousePosition({ x: 0, y: 0 })}
    >
      <animated.div
        className='carousel__slide__button action-left'
        style={fade}
        role='button'
        tabIndex='0'
        onClick={() => handleSlideCarousel('left')}>
        <FaChevronLeft />
      </animated.div>
      <div className='carousel__container'>
        <div
          className='carousel__content'
          style={{ transform: `translate(${carrouselPosition}px, 0px)` }}>
          {children}
        </div>
      </div>
      <animated.div
        className='carousel__slide__button action-right'
        role='button'
        tabIndex='0'
        onClick={() => handleSlideCarousel('right')}>
        <FaChevronRight />
      </animated.div>
    </animated.section>
  );
};

export default Carousel;
