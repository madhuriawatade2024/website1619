
import React, { useState, useEffect } from "react";
import './SlideshowFooter.css'; 
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const SlideshowFooter = () => {
  const images = [image1, image2, image3]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change image at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-footer">
      <div className="slideshow-container">
        <div
          className="split-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
      </div>
      <div className="footer-content">
        <p>© 2025 Your Website | All rights reserved.</p>
      </div>
    </div>
  );
};

export default SlideshowFooter;
