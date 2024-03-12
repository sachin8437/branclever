// Gallery.js
import React, { Component } from 'react';
import '../css/Gallery.css'; // Import your CSS file

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'tab1',
    };
  }

  handleTabClick = (tabId) => {
    this.setState({ activeTab: tabId });
  };

  render() {
    const imageUrls = [
      process.env.PUBLIC_URL + '/images/gallery/pt1.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt2.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt3.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt4.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt5.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt1.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt2.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt3.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt4.jpg',
      process.env.PUBLIC_URL + '/images/gallery/pt5.jpg',
      // Add more image URLs as needed
    ];

    const christmasImg = [
      process.env.PUBLIC_URL + '/images/gallery/christmas/1.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/2.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/3.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/4.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/5.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/6.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/7.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/8.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/9.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/christmas/10.jpeg',
      // Add more image URLs as needed
    ];

    const bdayImg = [
      process.env.PUBLIC_URL + '/images/gallery/birthday/1.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/2.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/3.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/4.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/5.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/6.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/7.jpg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/8.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/birthday/9.jpeg', 
      // Add more image URLs as needed
    ];

    
    const diwaliImg = [
      process.env.PUBLIC_URL + '/images/gallery/diwali/1.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/diwali/2.jpg',
      process.env.PUBLIC_URL + '/images/gallery/diwali/3.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/diwali/4.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/diwali/5.jpeg',  
      // Add more image URLs as needed
    ];
    const holiImg = [
      process.env.PUBLIC_URL + '/images/gallery/holi/1.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/holi/2.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/holi/3.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/holi/4.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/holi/5.jpeg',  
      // Add more image URLs as needed
    ];

    const activityImg = [
      // process.env.PUBLIC_URL + '/images/gallery/activity/1.jpeg',
      // process.env.PUBLIC_URL + '/images/gallery/activity/2.jpg',
      // process.env.PUBLIC_URL + '/images/gallery/activity/3.jpeg',
      // process.env.PUBLIC_URL + '/images/gallery/activity/4.jpeg',
      // process.env.PUBLIC_URL + '/images/gallery/activity/5.jpeg',  
      // Add more image URLs as needed
    ];

    const anniversaryImg = [
      process.env.PUBLIC_URL + '/images/gallery/anniversary/1.jpg',
      process.env.PUBLIC_URL + '/images/gallery/anniversary/2.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/anniversary/3.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/anniversary/4.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/anniversary/5.jpeg',  
      process.env.PUBLIC_URL + '/images/gallery/anniversary/6.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/anniversary/7.jpeg',
      process.env.PUBLIC_URL + '/images/gallery/anniversary/8.jpeg', 
      // Add more image URLs as needed
    ];

    const videos = [
      process.env.PUBLIC_URL + '/images/gallery/video/1.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/2.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/3.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/4.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/5.mp4', 
      process.env.PUBLIC_URL + '/images/gallery/video/6.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/7.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/8.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/9.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/10.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/11.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/12.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/13.mp4',
      process.env.PUBLIC_URL + '/images/gallery/video/14.mp4',  
      process.env.PUBLIC_URL + '/images/gallery/video/15.mp4',
      // Add more image URLs as needed
    ];

    
    const tabs = [
      { id: 'tab1', label: 'All' },
      // { id: 'tab2', label: 'Activity' },
      { id: 'tab7', label: 'Anniversary' },
      { id: 'tab3', label: 'Birthday Celebrations' },
      { id: 'tab4', label: 'Christmas Celebrations' },
      { id: 'tab5', label: 'Diwali Celebrations' },
      { id: 'tab6', label: 'Holi Celebrations' }, 
      //{ id: 'tab8', label: 'Videos' },
    ];

    const tabContents = {
      tab1: (
        <>          
            <div className="grid-container">
              {imageUrls.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                </div>
              ))}
            </div> 
        </>
      ),
      tab2: (
        <>          
            <div className="grid-container">
              {activityImg.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                </div>
              ))}
            </div> 
        </>
      ),
      tab3: (
        <>          
        <div className="grid-container">
          {bdayImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
            </div>
          ))}
        </div> 
    </>
      ),
      tab4: (
        <>          
          <div className="grid-container">
            {christmasImg.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
              </div>
            ))}
          </div> 
        </>
      ),
      tab5: (
        <>          
            <div className="grid-container">
              {diwaliImg.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                </div>
              ))}
            </div> 
        </>
      ),
      tab6: (
        <>          
            <div className="grid-container">
              {holiImg.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                </div>
              ))}
            </div> 
        </>
      ),
      tab7: (
        <>          
            <div className="grid-container">
              {anniversaryImg.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                </div>
              ))}
            </div> 
        </>
      ),
      tab8: (
        <>          
            <div className="grid-container">
              {videos.map((video, index) => (
                <div key={index} className="gallery-item">
                  <video autoPlay muted loop className={`banner-video grid-item grid-item-${index + 1}`} poster={process.env.PUBLIC_URL + '/images/job-5.jpg'} >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
              ))}
            </div> 
        </>
      ),
    };

    

    return (
      <>
      <div className='main-gallery'>
        <div className='big_fam'>
             <h2>We’re One Big Family</h2>
             <p>We’re One Big Family</p>
           </div>
        <div className="gallery">

        <div className="vertical-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${this.state.activeTab === tab.id ? 'active' : ''}`}
              onClick={() => this.handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabContents[this.state.activeTab]} 
         
        </div>   
        </div>
        </div>     
        
      </>
    );
  }
}
