import React, { useEffect, useState } from "react";
import "./FadeSlide.css";

const FadeSlide = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => setIsVisible(false), 5000);
    
    return () => clearTimeout(timer); 
  }, []);

  return (
    isVisible && (
      <div className="fade-slide">
        <div className="blur-background">
          <h1 className="animated-text">MADHURI</h1>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    )
  );
};

export default FadeSlide;
