import React from 'react'
import Banner from '../components/Banner'
// import PlatForms from '../components/PlatForms'
//import FruitsCarousel from '../components/FruitsCarousel';
//import Activity from '../components/Activity';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';
import Tabs from '../components/Tabs';
import Tachnology from '../components/Tachnology';
import AboutInfo from '../components/AboutInfo';    
import OurServices from '../components/OurServices';
import Icons from '../components/Icons';
import DatabaseSec from '../components/DatabaseSec';
import Faq from '../components/Faq';

const Home = () => {
   
    // const columnImages = [
    //   process.env.PUBLIC_URL + '/images/frelancer.png',
    //   process.env.PUBLIC_URL + '/images/up-work.png',
    //   process.env.PUBLIC_URL + '/images/pph.png',
    //   process.env.PUBLIC_URL + '/images/guru.png',
    // ];

    // const backgroundImage = [
    //   process.env.PUBLIC_URL + '/images/develop.jpg',
    //   process.env.PUBLIC_URL + '/images/meeting.jpg',
    //   process.env.PUBLIC_URL + '/images/job.jpg',
    //   process.env.PUBLIC_URL + '/images/job-5.jpg',
    // ];  
    const aboutInfo = [
      process.env.PUBLIC_URL + '/images/about.jpg',
      process.env.PUBLIC_URL + '/images/crown.png',
    ];

  

    const technologyImages = [
      process.env.PUBLIC_URL + '/images/tech/shopify.png',
      process.env.PUBLIC_URL + '/images/tech/wordpress.png',
      process.env.PUBLIC_URL + '/images/tech/magento.png',
      process.env.PUBLIC_URL + '/images/tech/php.png',
      process.env.PUBLIC_URL + '/images/tech/mysql.png',
      process.env.PUBLIC_URL + '/images/tech/laravel.png',
      process.env.PUBLIC_URL + '/images/tech/react.png',
      process.env.PUBLIC_URL + '/images/tech/node_js.png',  
      process.env.PUBLIC_URL + '/images/tech/mongo_db.png',
    ]; 

    return (
      <>
        <div className='page'>
          <Banner />
          <Tachnology techImages={technologyImages} />
          
          <AboutInfo imgAbout={aboutInfo} />
          {/* <FruitsCarousel bgImage={backgroundImage} /> */}
          
          <OurServices />
          {/* <PlatForms images={columnImages} /> */}
          <Tabs />
          {/* <Activity /> */}
          
          <TestimonialCarousel /> 
          <Icons />
          <DatabaseSec />
          <div className='faq_Contact_Sec'>
            <Faq />
            <ContactForm /> 
            
          </div>  
        </div>
       
      </>
    );
  };
 
  export default Home;
