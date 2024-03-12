import React from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
 

const Contact = () => {
  const divStyle = {
    background: `url(${process.env.PUBLIC_URL}/images/contact-bg-banner-desktop.png)`,
    backgroundSize: 'cover',
    // Add other background-related properties if needed
  };

  const expert = [
    process.env.PUBLIC_URL + '/images/cont-idea-img.jpg',
  ];

  return (
    <div className='main-contact-page'>
      <div className='contact-page-inner'>
        <section className='heading' style={divStyle}> 
          <div className='formSectionCTC'>
            <div className='ctc-inner'>
              <div className='ctc-left'>
                <h2>Kickstart Your Digital <br />Journey Today</h2> 
                <p>Get all your questions answered by <br />our business development team.</p>
                <span><Link to='/career'>For Career</Link></span>
              </div>
              <div className='ctc-right'>
                <ContactForm />
              </div> 
            </div>
          </div>
        </section>
 
        {/* new section code start here */}
        <div className='section-420'>
        <div className='heading-contact'>
          <h3> FEEL FREE TO CONTACT US <span className='anitime'>ANYTIME</span> </h3>
        </div>
        <div className='des'>
          <p>With representatives around the world and products and services for every aspect of your business, Brandclever is eager to help your IT needs. We try to be the most responsive to your inquiries and emails. Towards this, we connect you directly with the people who will respond to your emails and calls. You can help us, respond quickly by choosing the most appropriate contact information.</p>
        </div>
        </div>



        <div className="contact-section-430">
                <div className="contact-item-1">
                <div className='bk-add'>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                  <h2>ADDRESS</h2>
                    <div className="content-1">4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</div>
                </div>

                <div className="contact-item-2">
                <div className='bk-em'>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <h2>EMAIL</h2>
                    <div className="content-2">career@brandclever.in</div>
                </div>

                <div className="contact-item-3">
                <div className='bk-ph'>
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                </div>
                <h2>PHONE</h2>
                    <div className="content-3">9872711866</div>
                </div>
          </div>

        <div className='digital-seamlessly'>
          <div className='left-digital'>
            <h3>Enable Unmatched Digital Transformation Seamlessly</h3>
            <span className='btn button_slide slide_down'><Link to=''>Talk to Our Experts</Link></span>
          </div>
          <div className='right-digital'>
             <img src={expert[0]} alt='Our Expert' />
          </div> 
        </div>
          
      </div>
    </div>
  );
};

export default Contact;
