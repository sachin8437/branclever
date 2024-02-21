import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => { 

  return (
    <div className='main-contact-page'>
      <div className='contact-page-inner'>
        <section className='heading'> 
          <div className='banner-heading'>
            <h2>Contact Us</h2>
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



        <div class="contact-section-430">
                <div class="contact-item-1">
                <div className='bk-add'>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                  <h2>ADDRESS</h2>
                    <div class="content-1">4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</div>
                </div>

                <div class="contact-item-2">
                <div className='bk-em'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <h2>EMAIL</h2>
                    <div class="content-2">hr@brandclever.in</div>
                </div>

                <div class="contact-item-3">
                <div className='bk-ph'>
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                </div>
                <h2>PHONE</h2>
                    <div class="content-3">9872711866</div>
                </div>
          </div>


          <ContactForm />





      
       
      </div>
    </div>
  );
};

export default Contact;
