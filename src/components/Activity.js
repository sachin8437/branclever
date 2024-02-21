// Activity.js

import React from 'react';
import '../Activity.css';
import banner_bg from './Images/brandclever.svg';

const Activity = () => {
  return (
    <>
    <section id="schedules" className="schedule activity">
           
    <div className="showcase">

        {/* Background video */}
        <video autoPlay muted loop className="activity-video clipped-video" poster="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/poster.webp"
            role="none">
            <source src={process.env.PUBLIC_URL + '/video/bottom_video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* <div className="content">
            <h2>Welcome to Brandclever !</h2>
            <p>Beat The Technology Cleverness With Brandclever.</p>
        </div> {banner_bg} */}
        <img src={banner_bg} alt="Brandclever" />
         {/* <svg height="100%" width="600px">
            <clipPath id="text-overlay" width="100%" height="100%">
              <text id="title" x="40" y="50" dy="1.58em" style={{ fontSize: "100px" }}>Brandclever</text>
            </clipPath>
          </svg>    */}
        
        </div>
    </section>
       
    </>
  );
};

export default Activity;