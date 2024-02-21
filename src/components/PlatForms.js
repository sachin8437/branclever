// PlatForms .js   ( Platform )

import React from 'react';
import '../PlatForms.css';

const PlatForms = ({ images }) => {
  return (
    <div className="four-columns colun_frelance">
      {images.map((image, index) => (
        <div className="column" key={index}>
          <img src={image} alt={`Column ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PlatForms;
