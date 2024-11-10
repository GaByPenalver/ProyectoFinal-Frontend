// src/components/ExampleCarouselImage.jsx
import React from 'react';

const CarouselImage = ({ src, alt, text }) => {
  return (
    <div className="carousel-image">
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
      {text && <p>{text}</p>} {/* Muestra el texto si se proporciona */}
    </div>
  );
};

export default CarouselImage;
