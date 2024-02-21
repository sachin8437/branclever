// SplitSlideshows.js
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/SplitSlideshow.css';

const images = [
  'https://miro.medium.com/max/3840/1*Act0CYfi-TmFts310z2z_A.jpeg',
  'https://images5.alphacoders.com/862/thumb-1920-862186.jpg',
  'https://wallpaperaccess.com/full/1267221.jpg',
  // Add more image URLs as needed
];

const SplitSlideshows = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      const delta = Math.sign(event.deltaY);

      if (delta > 0 && activeSlide < images.length - 1) {
        sliderRef.current.slickNext();
        event.preventDefault(); // Prevent default scroll behavior
      } else if (delta < 0 && activeSlide > 0) {
        sliderRef.current.slickPrev();
        event.preventDefault(); // Prevent default scroll behavior
      }
    };

    const handleSliderScroll = (event) => {
      // Prevent scrolling if the last slide is not fully in view
      const lastSlide = document.querySelector('.split-image-slide:last-child');
      const lastSlideRect = lastSlide.getBoundingClientRect();

      if (activeSlide === images.length - 1 && lastSlideRect.bottom > window.innerHeight) {
        event.preventDefault();
      }
    };

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('wheel', handleSliderScroll);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('wheel', handleSliderScroll);
    };
  }, [activeSlide]);

  const settings = {
    dots: false,
    infinite: true,
    vertical: true, // Set vertical to true for up/down scrolling
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveSlide(index),
  };

  return (
    <div className="split-image-slider" onWheel={() => {}}>
      {/* Use the ref on the slider */}
      <Slider ref={sliderRef} {...settings} initialSlide={activeSlide}>
      {images.map((imageUrl, index) => {
         // const nextIndex = (index + 1) % images.length;
         // const rightImage = index === images.length - 1 ? images[0] : images[nextIndex];

          return (
            <div key={index} className={`split-image-slide ${index === activeSlide ? 'active' : ''}`}>
              <div className="left-half">
                <img src={imageUrl} alt={`Slide ${index + 1}`} />
              </div>
              {/* Use a different image for the right half */}
              <div className="right-half"> 
                <img src={imageUrl} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SplitSlideshows;
