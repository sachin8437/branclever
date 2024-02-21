import React, { useState } from 'react';
import '../css/tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const allImg = [
    process.env.PUBLIC_URL + '/images/portfolio/jumpsport.png', 
    process.env.PUBLIC_URL + '/images/portfolio/wp/costner-recovery.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/mamasmarketplace-au-mamasmarketplace.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/pt-businessacademy-si.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/super-solar-systems.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/studioblup.png',
  ];
  
  const wordpressImg = [
    process.env.PUBLIC_URL + '/images/portfolio/wp/costner-recovery.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/mamasmarketplace-au-mamasmarketplace.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/pt-businessacademy-si.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/super-solar-systems.png',
    process.env.PUBLIC_URL + '/images/portfolio/wp/studioblup.png',
  ]; 

  const phpImg = [
    process.env.PUBLIC_URL + '/images/portfolio/php/CRM-Project.png',
    process.env.PUBLIC_URL + '/images/portfolio/php/lucy-exp.png', 
    process.env.PUBLIC_URL + '/images/portfolio/wp/super-solar-systems.png', 
  ];

  const shopifyImg = [
    process.env.PUBLIC_URL + '/images/portfolio/shopify/1.png',
    process.env.PUBLIC_URL + '/images/portfolio/shopify/2.png', 
    process.env.PUBLIC_URL + '/images/portfolio/shopify/3.png', 
  ];

  return (
    <div className='tab_inner_project'>
        <div className='container'>
            <div className='tab-inner'>
                <p className='subtitle'>Portfolio</p>
                <h3 className='tab-heading'>WE ARE PROUD OF <br /> THE WORK WE HAVE DONE.</h3>
                <ul className="tabs">
                    <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1) }>All</li>
                    <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2) }>PHP</li>
                    <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3) }>Shopify</li>
                    <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4) }>WordPress</li>
                    <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5) }>Magento </li>
                </ul>

                <div className="tab_content">
                    { activeTab === 1 && <div className="tab_panel port_content">  
                        {allImg.map((image, index) => (
                            <div className="screen_port column protpolio-clm" key={index}>
                                <img src={image} alt={`Column ${index + 1}`} />
                            </div>
                        ))}
                    </div> }
                    { activeTab === 2 && <div className="tab_panel port_content">
                        {phpImg.map((image, index) => (
                            <div className="screen_port column protpolio-clm" key={index}>
                                <img src={image} alt={`Column ${index + 1}`} />
                            </div>
                        ))}
                    </div> }
                    { activeTab === 3 && <div className="tab_panel port_content">
                        {shopifyImg.map((image, index) => (
                            <div className="screen_port column protpolio-clm" key={index}>
                                <img src={image} alt={`Column ${index + 1}`} />
                            </div>
                        ))}
                    </div> }
                    { activeTab === 4 && <div className="tab_panel port_content">
                        {wordpressImg.map((image, index) => (
                            <div className="screen_port column protpolio-clm" key={index}>
                                <img src={image} alt={`Column ${index + 1}`} />
                            </div>
                        ))}
                    </div> }
                    { activeTab === 5 && <div className="tab_panel port_content">
                        {wordpressImg.map((image, index) => (
                            <div className="screen_port column protpolio-clm" key={index}>
                                <img src={image} alt={`Column ${index + 1}`} />
                            </div>
                        ))}
                    </div> }
                </div>    
            </div>
        </div>
    </div>
  );
};

export default Tabs;