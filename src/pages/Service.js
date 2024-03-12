import React from 'react';
import '../css/ServicePage.css';
import web_development_service from './Assest/web_development_service.jpg';
import mobile_app_development from './Assest/mobile_app_development.jpg';
import graphic_design from './Assest/graphic_design.jpg';
import mearn_stack from './Assest/mern_stack-25.jpg';
import digital_marketing from './Assest/digital_marketing.jpg';
import content_startgey from './Assest/content_strategy.jpg';
import framework from './Assest/framework.jpg';
import cms_solution from './Assest/cms_solutions.jpg';


export default function Service() {
  return (
    <div className='service'>
    <section className='main-services'>
      <div className='main-heading'>
          <h1>Services</h1>
      </div>
    </section>
    <section className='inner-services'>
      <div className='our-services-all'>
          <div className='web-development'>
              <h2>Web Development</h2>
                      <p>At Aron Web Solutions, Our professionals will Utilise modern programming languages and
          frameworks to build secure, scalable, and high-performing web solutions. We prioritize functionality,
          efficiency, and user-friendliness, guaranteeing the best experience for your audience.</p>
                  <p className='technology-web'>Our Web Development Platforms</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>PHP frameworks</li>
                          <li>WordPress</li>
                          <li>Shopify</li>
                          <li>React js</li>
                          <li>Angular js</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
          <div className='web-development-image'>
              <img src={web_development_service} alt='webdevelopment'/>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development-image'>
              <img src={mobile_app_development} alt='mobileappdevelopment'/>
          </div>
          <div className='web-development'>
              <h2>Mobile App Development</h2>
                      <p>We craft mobile applications with the latest technologies that mirror your vision,
  blending innovation with precision. From concept to launch, we ensure your app resonates with users, gains
  trust, and exceeds expectations. Whether it's on a native or hybrid platform, Aron Web Solutions is your trusted
  mobile app development partner.</p>
                  <p className='technology-web'>Our Mobile Development Platforms</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>Flutter</li>
                          <li>React Native</li>
                          <li>Xamarin</li>
                          <li>Native Script</li>
                          <li>Mobile Angular UI</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development'>
              <h2>Graphic Design</h2>
                      <p>We transform ideas into creative designs, leaving a professional mark on your brand.
  Our creative team provides quality and attention-grabbing pixels and stop-scrolling graphics. Let's create
  graphics that speak and connect your brand with your audience.</p>
                  <p className='technology-web'>Our Graphic design Tools</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>Adobe Photoshop</li>
                          <li>Coreldraw</li>
                          <li>Figma</li>
                          <li>Illustrator</li>
                          <li>Adobe XD</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
          <div className='web-development-image'>
              <img src={graphic_design} alt='graphicdesign'/>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development-image'>
              <img src={mearn_stack} alt='mearnstack'/>
          </div>
          <div className='web-development'>
              <h2>Mern Stack</h2>
                      <p>We excel in the demanding technologies of the MERN Stack: MongoDB, Express.js,
  React, and Node.js to create stunning, interactive websites. Your online presence, developed with precision,
  speed, and scalability, is just a click away. Your ideal web solution awaits us.</p>
                  <p className='technology-web'>Our Mern Stack Services</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>MongoDB</li>
                          <li>Express.js</li>
                          <li>React.js</li>
                          <li>Node.js</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development'>
              <h2>Digital Marketing</h2>
                      <p>Be the first one to be seen on search engines. We have immense expertise in SEO and
  marketing to draw new traffic. We're adaptive, serving various industries with different and effective
  strategies for businesses of any scale or sector.</p>
                  <p className='technology-web'>Our Digital Marketing Tools</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>Google Analytics</li>
                          <li>Semrush</li>
                          <li>Google Ads</li>
                          <li>Active Campaign</li>
                          <li>Ahrefs</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
          <div className='web-development-image'>
              <img src={digital_marketing} alt='digitalmarketing'/>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development-image'>
              <img src={content_startgey} alt='contentstartgey'/>
          </div>
          <div className='web-development'>
              <h2>Content Strategy</h2>
                      <p>Craft winning and engaging content with our strategic content solutions. We blend
  creativity and data to shape an authentic strategy that resonates with your brand's essence. Let your story shine
  through compelling content.</p>
                  <p className='technology-web'>Our Content Strategy Tools</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>Jasper.ai</li>
                          <li>Grammarly</li>
                          <li>Quillbot</li>
                          <li>Copy.ai</li>
                          <li>Quetext</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development'>
              <h2>Framework</h2>
                      <p>Our framework is the backbone of your quality website. Your website becomes a captivating
  journey. From responsive design to interactive elements, we craft a framework that enhances user engagement, drives
  conversions, and leaves a lasting impact.</p>
                  <p className='technology-web'>Our Framework Tools</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>Codeigniter</li>
                          <li>Cake PHP</li>
                          <li>Yii</li>
                          <li>Symphony</li>
                          <li>Fuel PHP</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
          <div className='web-development-image'>
              <img src={framework} alt='framework'/>
          </div>
      </div>
      <div className='our-services-all'>
          <div className='web-development-image'>
              <img src={cms_solution} alt='cmssolution'/>
          </div>
          <div className='web-development'>
              <h2>CMS Solutions</h2>
                      <p>Effortlessly manage your digital identity with our CMS service. Our Content Management
  System (CMS) service is your key to effortless digital control. With an easy-to-use interface, you can update,
  modify, and expand your website's content with ease. Keep your online business fresh, dynamic, and always genuine.</p>
                  <p className='technology-web'>Our Content Management Tools</p>
                  <div className='explantion-tech'>
                      <ul>
                          <li>WordPress</li>
                          <li>Joomla</li>
                          <li>Drupal</li>
                          <li>Typo3</li>
                          <li>Umbraco</li>
                          <li>Kentiko</li>
                          <li>DotnetNuke</li>
                      </ul>
                  </div>
                  <div className='read-more'>
                      <a href='/services' className='btn btn-primary'>Read More</a>
                  </div>
          </div>
      </div>
    </section>
  </div>
  )
}
