// Banner.js

import React from 'react';
import '../Banner.css';
// import banner_bg from '../Images/job-5.jpg';

const Banner = () => {
  return (
    <div className="banner brand_banner_section">
        {/* Background video */}
        <video autoPlay muted loop className="banner-video" poster={process.env.PUBLIC_URL + '/images/job-5.jpg'} >
            <source src={process.env.PUBLIC_URL + '/video/banner_bg.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="content">
            <h1>Welcome to Brandclever!</h1>
            <p>Brandclever: Elevate Your Identity, Ignite Your Impact</p>
        </div>
      
    </div>
  );
};

export default Banner;