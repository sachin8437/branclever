import React from 'react'
import '../css/tailwind.css';

const AboutInfo = () => { 
    return (
      <div className='about_us_section'>
          <div className='container'>
             <div className='two-columns aboutInfo-section'>
                <div className='about-content-columns'>
                    <div className='about-content'> 
                        <h1 class="text-blue-600">Design, Develop, Deliver: Brandclever Commitment</h1>
                        <p>We at  Brandclever are innovators, problem solvers, and partners in your digital journey. Our company is best company in all formates.  We are more than just an IT company. Our dedication to quality and enthusiasm for technology have allowed us to lead the way in enabling companies with innovative solutions. Our goal is to satisfy our clients with cutting-edge IT solutions that go above and beyond their expectations. With our knowledge, we hope to leave a lasting impression on businesses by promoting efficiency and growth. </p>
                         
                    </div>
                </div>
                {/* <div className='about-img-columns'>
                    <div className='image-sec'>
                    <div className='experience_crown'>    
                           <img src={imgAbout[1]} alt='' />
                            <h4>5+</h4>
                            <p>Years of Experience</p>
                        </div>
                        <img src={imgAbout[0]} alt='' />  
                    </div>
                </div> */}
             </div>
          </div>
      </div>

    );
  };


  export default AboutInfo;
