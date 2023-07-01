/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client';

import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '@/app/slider.css'

const defaultResponsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 3,
    itemsFit: 'contain',
  },
};

function Slider({
  slides = null,
  responsive = defaultResponsive,
  noDots = true,
  noControl = false,
}) {
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  useEffect(() => {
    setIsCarouselReady(true);
  }, []);

  if (isCarouselReady) {
    return (
      <AliceCarousel
      dotsClass="carousel-dots"
        disableButtonsControls={noControl}
        disableDotsControls={noDots}
        infinite
        autoPlay
        autoPlayInterval={2000}
        mouseTracking
        items={slides}
        responsive={responsive}
      />
    );
  }
  return <div className="" />;
}

export default Slider;
