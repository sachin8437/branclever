import React, { Component } from 'react'
import '../css/ServicePage.css'; 
import OurServices from '../components/OurServices'; 

export default class Service extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          services: [
            {
              title: 'Mern Stack',
              icon: process.env.PUBLIC_URL +'/images/service/web-devlopment.png',
              description: 'We excel in the demanding technologies of the MERN Stack: MongoDB, Express.js, React, and Node.js to create stunning, interactive websites. Your online presence, developed with precision, speed, and scalability, is just a click away. Your ideal web solution awaits us.',
            },
            {
              title: 'Content Strategy',
              icon: process.env.PUBLIC_URL + '/images/service/ui-ux-design.png',
              description: 'Craft winning and engaging content with our strategic content solutions. We blend creativity and data to shape an authentic strategy that resonates with your brand`s essence. Let your story shine through compelling content.',
            },
            {
              title: 'Framework',
              icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
              description: 'Our framework is the backbone of your quality website. Your website becomes a captivating journey. From responsive design to interactive elements, we craft a framework that enhances user engagement, drives conversions, and leaves a lasting impact',
            },
            {
              title: 'Software Testing',
              icon: process.env.PUBLIC_URL + '/images/service/digital.png',
              description: 'Our company excels in creating modern and user-friendly website designs. Whether you need a highly engaging portfolio site or a professional e-commerce platform, we tailor each design to reflect your unique brand identity. Brandclever is your trusted partner.',
            }, 
          ],
        };
    }

  render() {

    return (
      <div className='service'>
        <div className='service-inner'>  
            <section className="hero-image" > 
                    <div className="mainTitle">
                    <h1>Services</h1> 
                    </div>
            </section>
            <div className="container">    
                <section className="services-second">
                    <div className="first">
                    <div>
                        <h3>6+</h3>
                        <p>Years of Experience.</p>
                    </div>
                    <div>
                        <h3>30+</h3>
                        <p>Skilled Professionals.</p>
                    </div>
                    <div>
                        <h3>30+</h3>
                        <p>Skilled Professionals.</p>
                    </div>
                    <div>
                        <h3>93+</h3>
                        <p>Projects Worldwide.</p>
                    </div>
                    <div>
                        <h3>100%</h3>
                        <p>Customer Satisfaction.</p>
                    </div>
                    </div>
                    <div className="second">
                    <h4>You Envision, We Deliver</h4>
                    <p>As a dedicated web development company, we're committed to turning your innovative ideas into tangible realities. In addition to creating cutting-edge applications, architecting robust systems, and designing intuitive user experiences, we help you turn your vision into a reality.</p>
                    <div>
                        <h6>Our Unique Software Development Services Provide</h6>
                        <ul>
                        <li>Tailored Solutions</li>
                        <li>Innovative Approach</li>
                        <li>User-Centric Design</li>
                        <li>Agile Development</li>
                        <li>Exceptional Team</li>
                        <li>Timely Delivery</li>
                        </ul>
                    </div>
                    </div>
                    <div className="third">
                    <h2>Our Tech Stack</h2>
                    <ul>
                        <li>MERN
                        <ul>
                        <li>MongoDB</li>
                        <li>ExpressJS</li>
                        <li>ReactJs</li>
                        <li>NodeJS</li>
                        </ul>
                        </li>
                        <li>LAMP 
                        <ul>
                            <li>Linux</li>
                            <li>Apache</li>
                            <li>MySQL</li>
                            <li>PHP</li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </section>
                <OurServices /> 
                <section className="services-third">
                    <div className="services-third-container"> 
                        <div className="services-third-main-div">
                        {this.state.services.map((service, index) => (
                            <div key={index} className="services-card"> 
                                <img src={service.icon} alt={service.title} />
                                <h5>{service.title}</h5>
                                <p>{service.description}</p>
                            </div>
                        ))}    
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    )
  }
}
