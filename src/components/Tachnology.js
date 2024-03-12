// PlatForms.js
import React from 'react';
import Slider from 'react-slick';
import '../PlatForms.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tachnology = ({ techImages }) => {
  const settings = {
    lazyLoad: 'ondemand',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    easing: "linear",
    cssEase: "linear",
    draggable: false,
    vertical: false, // Set to true for vertical slider
    verticalSwiping: true, // Set to true for vertical swiping
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='technology-main'>
      
      <div className="technology-inner"> 
        <Slider {...settings}>
          {techImages.map((techImage, index) => (
            <div className="column-tech" key={index}>
              <img src={techImage} alt={`Column ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Tachnology;
