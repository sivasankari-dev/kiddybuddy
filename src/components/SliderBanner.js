import React, { useState, useEffect } from 'react';
import '../style/SliderBanner.css'; // Import the CSS for slider styling

const SliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require('../assets/slider/toysoffer.jpg'), // Replace with actual image URLs
    require('../assets/slider/fashionoffer.jpg'),
    require('../assets/slider/bathcareoffer.jpg'),
    require('../assets/slider/spiritofindia.jpg'),
    require('../assets/slider/diapersoffer.png'),
  ];

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // useEffect hook to start the auto-play when the component mounts
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [nextSlide, images.length]); // Empty dependency array ensures this runs once when the component mounts


  return (
    <div className="slider">
      <div className="slider-content">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <div className="slider-buttons">
        <button className="prev-button" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SliderBanner;
