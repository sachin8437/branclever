// Counter.js

import React, { useEffect } from 'react';
import '../css/Counter.css'; // Import your CSS file

const Counter = () => {
  useEffect(() => {
    // This function used to create the countUp animation for business websites
    // Use the three parameters to customize it
    // Call it for every element
    // Note that there may be a small difference in the count (e.g., 100 might become 99), so check it

    let counterDelays = []; // Declare counterDelays array here

    function numCounter(tagId, maxCount, speed) {
      let initialNumber = 0;

      function counter() {
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
      }

      const counterDelay = setInterval(counter, speed);
      counterDelays.push(counterDelay); // Add the interval to the array

      function totalTime() {
        clearInterval(counterDelay);
      }

      const totalPeriod = speed * maxCount;
      setTimeout(totalTime, totalPeriod);
    }

    // Adjust the speed for both "Projects" and "Clients" counters to be the same
    const commonSpeed = 50;

    numCounter('Projects', 436, commonSpeed);
    numCounter('Clients', 301, commonSpeed);
    numCounter('Partners', 100, 10);

    // Clean up the intervals when the component unmounts
    return () => {
      counterDelays.forEach(clearInterval);
      counterDelays = []; // Clear the array when component unmounts
    };
  }, []);

  return (
    <div className="row counter-section">
      <div className="top-counter">
      <div className="column">
        <div className="card-counter">
          <h3>
            <span id="Projects">0</span>+
          </h3>
          <h3>Projects Delivered</h3>
        </div>
      </div>
      <div className="column">
        <div className="card-counter">
          <h3>
            <span id="Clients">0</span>+
          </h3>
          <h3>Happy Clients</h3>
        </div>
      </div>
      </div>
      <div className="bottom-counter">
      <div className="column">
        <div className="card-counter">
          <h3>
            <span id="Partners">0</span>%
          </h3>
          <h3>Our Succes Rate</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Counter;
