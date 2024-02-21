import React, { useState } from 'react';
import '../ServicesCarousel.css'; // Import your CSS file

const FruitsCarousel = ({bgImage}) => {
  

  const [fruitState, setFruitState] = useState({
    apple: {
      width: '850px',
      backgroundImage: bgImage[0],
      imgAnimation: 'down 1s linear 0s 1 normal forwards',
      textAnimation: 'text 1s linear 0s 1 normal forwards',
      showContent: true, // Add a new property for controlling the visibility 
      title: 'WEB DEVELOPMENT',
      content: 'Web development, a dynamic field, molds the digital realm through Front-End and Back-End Development. Front-End crafts user interfaces for visually appealing, interactive websites, while Back-End manages server-side operations and databases. Back-End relies on languages like Node.js or Python and databases like MySQL or MongoDB. These components harmonize to construct the backbone of robust web applications.',
    },
    lemon: {
      width: '100px',
      backgroundImage: bgImage[1],
      imgAnimation: 'down 1s linear 0s 1 normal forwards',
      textAnimation: 'text-back 1s linear 0s 1 normal forwards',
      showContent: false, // Add a new property for controlling the visibility 
      title: 'WEB DESIGN',
      content: 'As web design evolves, contemporary trends shape its landscape. Minimalism and flat design, characterized by simplicity and clean aesthetics, gain prominence for their modern appeal. Microinteractions and animations inject subtle dynamism into user interfaces, fostering engagement and storytelling through design. The synergy of artistic ingenuity, technical skill, and responsiveness to trends underscores the significance of web design in creating immersive and compelling digital experiences.',
    },
    strawberry: {
      width: '100px',
      backgroundImage: bgImage[2],
      imgAnimation: 'down 1s linear 0s 1 normal forwards',
      textAnimation: 'text-back 1s linear 0s 1 normal forwards',
      showContent: false, // Add a new property for controlling the visibility 
      title: 'GRAPHIC DESIGN',
      content: 'Graphic Design is the artful orchestration of visual elements to communicate messages effectively. Employing color psychology, typography, and layout techniques, graphic designers shape brand identities and convey information with impact. Utilizing tools like Adobe Creative Suite, they navigate evolving trends such as minimalism and interactive graphics, ensuring their work remains at the forefront of visual storytelling and communication innovation.',
    },
    orange: {
      width: '100px',
      backgroundImage: bgImage[3],
      imgAnimation: 'down 1s linear 0s 1 normal forwards',
      textAnimation: 'text-back 1s linear 0s 1 normal forwards',
      showContent: false, // Add a new property for controlling the visibility 
      title: 'SEO',
      content: "SEO (Search Engine Optimization) is a strategic approach to enhance a website's visibility on search engines. Through keyword optimization, content refinement, and technical improvements, SEO aims to increase organic traffic. By aligning with search engine algorithms, websites can attain higher rankings, improving online presence and accessibility. Constant adaptation to evolving algorithms is crucial for sustained effectiveness in this dynamic digital landscape.",
    },
  });

  const handleFruitHover = (fruit) => {
    const updatedState = { ...fruitState };

    for (const key in updatedState) {
      if (key === fruit) {
        updatedState[key].width = '850px';
        updatedState[key].textAnimation = 'text 1s linear 0s 1 normal forwards';
        updatedState[key].showContent = true; // Show the <p> tag
      } else {
        updatedState[key].width = '100px';
        updatedState[key].textAnimation = 'text-back 1s linear 0s 1 normal forwards';
        updatedState[key].showContent = false; // Hide the <p> tag
      }
    }

    setFruitState(updatedState);
  };

  
  const handleFruitLoad = (fruit) => {
    const updatedState = { ...fruitState };

    for (const key in updatedState) {
      if (key === fruit) {
        updatedState[key].width = '850px';
        updatedState[key].textAnimation = 'text 1s linear 0s 1 normal forwards';
        updatedState[key].showContent = true; // Show the <p> tag
      } else {
        updatedState[key].width = '100px';
        updatedState[key].textAnimation = 'text-back 1s linear 0s 1 normal forwards';
        updatedState[key].showContent = false; // Hide the <p> tag
      }
    }

    setFruitState(updatedState);
  };


  return (
    <div id="body" className='service_crousel_Section'>
      <div className='container'>
          <div className="service-heading">
            <h3>Our Services</h3>
            <p>Brandclever.in rapidly establishes a global presence, serving clients in USA, Canada, UK, Australia, and New Zealand. We guarantee 100% work and client satisfaction, with a diverse base spanning 15+ countries and over 900 satisfied clients.</p>
          </div>
      <div className="darksoul-carousel">
        {/* Render your background images here */}

        {/* Render each fruit component */}
        <Fruit
          id="apple"
          onMouseOver={() => handleFruitHover('apple')}
          {...fruitState.apple}
        />
        <Fruit
          id="lemon"
          onMouseOver={() => handleFruitHover('lemon')}
          onLoad={() => handleFruitLoad('lemon')}
          {...fruitState.lemon}
        />
        <Fruit
          id="strawberry"
          onMouseOver={() => handleFruitHover('strawberry')}
          {...fruitState.strawberry}
          onLoad={() => handleFruitLoad('strawberry')}
        />
        <Fruit
          id="orange"
          onMouseOver={() => handleFruitHover('orange')}
          onLoad={() => handleFruitLoad('orange')}
          {...fruitState.orange}
        />
      </div>
      </div>
    </div>
  );
};

const Fruit = ({ id, width, backgroundImage, imgAnimation, textAnimation, title, content, showContent, onMouseOver, onLoad }) => (
  <div className={id} onMouseOver={onMouseOver} onLoad={onLoad} style={{ width, backgroundImage: `url(${backgroundImage})` }}>
    {/* Render the fruit content here */}
     
    <h2 id={`${id}text`} style={{ animation: textAnimation }}>{title.toUpperCase()}</h2>
    {showContent && <p className={`${id}text`}> {content} </p>}
     
    {/*<p className={`${id}text ${showContent ? 'show-content' : 'hide-content'}`}>{content}</p>*/}

  </div>
);

export default FruitsCarousel;
