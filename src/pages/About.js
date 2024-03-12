import React, { Component } from 'react'
import OwnerInfo from '../components/OwnerInfo';
import AboutInfo from '../components/AboutInfo';
import Gallery from '../components/Gallery';
import Counter from '../components/Counter'; 
import JoinTeam from '../components/JoinTeam';
 



export default class About extends Component {
  render() {
    const aboutInfo = [
      process.env.PUBLIC_URL + '/images/about.jpg',
      process.env.PUBLIC_URL + '/images/crown.png',
    ];

    const ownerImg = process.env.PUBLIC_URL +'/images/owner.png';
    const ownersign = process.env.PUBLIC_URL +'/images/signature.png';
    
    //const bannerImage = process.env.PUBLIC_URL + '/images/banner/about.png';

    return (
      <div className='page-about'>
        <section className='heading'>
          {/* <div className='banner-image'>
             <img src={bannerImage} alt='About Us' />
          </div> */}
          <div className='banner-heading about-banner'>
            <h2>About Us</h2>
          </div>
        </section>
        <OwnerInfo />
        <div className="about_third">
          <AboutInfo imgAbout={aboutInfo} />
          <Counter />
        </div>
        <section>
          <div className="founder_section">
            <div className="founder_section_content">
              <div className="img_of_founder">
                  <img src={ownerImg} alt='' />	   
                </div>
                <div className="content_of_founder">
                  <h2>Founder & CEO</h2>
                  <p>Founder & MD Mr. Manish Verma Brandclever, an India-based IT software company, on March 6th, 2022. Brandclever specialises in HTML5/CSS3/WordPress/Custom PHP/Shopify/Wix websites that are innovative, responsive (mobile friendly), and effective. From the year 2022, we completed almost 450 projects. The majority of our customers are regulars. You may inquire as to how we manage this, as well as why we have so many long-term clientele. It’s a really straightforward procedure. We understand that you have a number of options when it comes to web hosting. We also understand how challenging it may be to switch web vendors. As a result, we provide personalised web design and development services to each of our customers</p> 
                  <img src={ownersign} className='signature' alt="Signature" />
                </div>
            </div>
          </div>
        </section>
        <Gallery />
        <JoinTeam />

      </div>
    )
  }
}
