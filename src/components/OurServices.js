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
          additionalInfo :'<ul><li>Shopify Store Development</li><li>Wordpress Site Development</li><li>Landing Page Website</li><li>Backend Development</li><li>Frontend Development</li></ul>',
          url: '',
        },
        {
          title: 'Graphic Design',
          icon: process.env.PUBLIC_URL + '/images/service/ui-ux-design.png',
          description: 'We provide the best facilities for customer satisfaction by creating professional and beautiful designs, making our customers happy.',
          additionalInfo :'<ul><li>Banner Designs</li><li>Icon Designs</li><li>Mobile Application Designs</li><li>Logo Designs</li><li>Business Cards</li><li>Brochures</li><ul>',
          url: '',
        },
        {
          title: 'CMS Solution',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo :'<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '',
        },
        {
          title: 'Digital Marketing',
          icon: process.env.PUBLIC_URL + '/images/service/digital.png',
          description: 'We are a full-service performance-driven digital marketing agency in India, offering a complete range of digital marketing services.',
          additionalInfo :'<ul><li>Inbound Marketing</li><li>Search Engine Optimization(SEO)</li><li>Social Media Marketing</li><li>Search Engine Marketing(SEM)</li><li>Email Marketing</li><li>Analytics Consultation</li></ul>',
          url: '',
        }, 
        {
          title: 'Content Strategy',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo :'<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '',
        },
        {
          title: 'Mern Stack',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo :'<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '',
        },
        {
          title: 'Software Testing',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo :'<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '',
        },
        {
          title: 'Framework',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo :'<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '',
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
                Brandclever produces the ideal reflection for any kind of business through our creative and exclusive designs. We offer web development, web designing, and SEO services. Our clients have access to a range of specialized digital strategy, web design, web development, and digital services. Brandclever always keeps its services up-to-date with the trends in the market, providing its customers worldwide with high-end and easily extensible internet, intranet, and extranet products. Services we offer range from creating custom website designs to developing business applications of any complexity. We provide the following services
            </p>
            <div className="service-row">
              {this.state.services.map((service, index) => (
                <div className='col serviceCount'>
                <div key={index} className="frontCont">
                  <img src={service.icon} alt={service.title} />
                  <h3>{service.title}</h3>                 

                </div>
                </div>
              ))} 
            </div>
            <div className="read-btnn">
                <Link to="/service" className='button_slide slide_down'>Read More</Link>
            </div> 
        </div>
      </div>
    );
  }
}
