// SmoothScroll.js
import React from 'react';
import { Link } from 'react-scroll';

const SmoothScroll = () => {
  return (
    <nav>
      <Link
        to="contactForm"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80} // Adjust the offset if you have a fixed navbar
      >
        Section 1
      </Link>
      <Link
        to="section2"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        Section 2
      </Link>
      {/* Add more links for other sections as needed */}
    </nav>
  );
};

export default SmoothScroll;
