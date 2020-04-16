/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => {
  const [mousePosition, setMousePosition] = useState(0);
  const [carrouselPosition, setCarrouselPosition] = useState(0);
  console.log(mousePosition);

  useEffect(() => {
    const carouselNode = document.querySelector('.carousel');
    const carouselContainerNode = document.querySelector('.carousel__container');
    const carrouselBoxWidth = carouselNode.offsetWidth;
    const carrouselContainerTotalWidth = carouselContainerNode.scrollWidth;

    if (mousePosition.x <= 100 && mousePosition.x >= 20) {
      let interval;
      if (carrouselPosition !== 0) {
        interval = setInterval(() => {
          setCarrouselPosition(carrouselPosition + 1);
        }, 2000);
      } else {
        clearInterval(interval);
      }
    }

    if (mousePosition.x >= carrouselBoxWidth - 100) {
      setCarrouselPosition(carrouselPosition - 1);
      // setInterval(() => {
      // }, 2000);
    }
  });

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <section
      className='carousel'
      onMouseMove={e => setMousePosition({ x: e.clientX, y: e.clientY })}
      onMouseOut={() => setMousePosition({ x: 0, y: 0 })}
    >
      <div className='carousel__container' style={{ left: carrouselPosition }}>
        {children}
      </div>
    </section>
  );
};

export default Carousel;
