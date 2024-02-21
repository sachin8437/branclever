import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/OurServices.css';

export default class OurServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          title: 'Web Development',
          icon: process.env.PUBLIC_URL +'/images/service/web-devlopment.png',
          description: 'Brandclever uses the latest technology in the field of web development, ensuring that all our websites are of high quality.',
        },
        {
          title: 'UI/UX Design',
          icon: process.env.PUBLIC_URL + '/images/service/ui-ux-design.png',
          description: 'We provide the best facilities for customer satisfaction by creating professional and beautiful designs, making our customers happy.',
        },
        {
          title: 'CMS Solution',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
        },
        {
          title: 'Digital Marketing',
          icon: process.env.PUBLIC_URL + '/images/service/digital.png',
          description: 'We are a full-service performance-driven digital marketing agency in India, offering a complete range of digital marketing services.',
        }, 
      ],
    };
  }

  render() {
    return (
      <div className='our-services'>
        <div className="services-inner"> 
            <h2>Our Services</h2>
            <p className='litle-des'>
                Brandclever produces the ideal reflection for any kind of business through our creative and exclusive designs. We offer web development, web designing, and SEO services. Our clients have access to a range of specialized digital strategy, web design, web development, and digital services. Brandclever always keeps its services up-to-date with the trends in the market, providing its customers worldwide with high-end and easily extensible internet, intranet, and extranet products. Services we offer range from creating custom website designs to developing business applications of any complexity. We provide the following services:
            </p>
            <div className="service-row">
              {this.state.services.map((service, index) => (
                <div key={index} className="col">
                  <img src={service.icon} alt={service.title} />
                  <h3>{service.title}</h3>                 
                  <p>{service.description}</p>
                </div>
              ))} 
            </div>
            <div className="read-btnn">
                <Link to="/" className='button_slide slide_down'>Read More</Link>
            </div> 
        </div>
      </div>
    );
  }
}
