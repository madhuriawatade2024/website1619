import React, { useState, useEffect } from 'react';
import './WebDevelopment.css'; 
import videoSrc from '../assets/web2.mp4'; 

const WebDevelopment = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrambledText, setScrambledText] = useState("Web Development");

  // Function to scramble text
  const scrambleText = (text) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let scrambled = text.split('').map(char => {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }).join('');
    return scrambled;
  };

  // Scrambling effect for text
  useEffect(() => {
    const originalText = "Web Development";
    let index = 0;
    const interval = setInterval(() => {
      setScrambledText(scrambleText(originalText));
      index++;
      if (index > 30) {
        clearInterval(interval);
        setScrambledText(originalText);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="web-development-container">
      <h1 className="scrambled-text">{scrambledText}</h1>
      <p className="description-text fade-in">
        Unlock the potential of your digital presence with our expert web development services. 
        From responsive designs to seamless user experiences, we ensure your website stands out.
      </p>
      <p className="description-text fade-in delay">
        Our team specializes in creating dynamic and secure websites tailored to your unique goals. 
        Experience performance, aesthetics, and functionality combined in one powerful solution.
      </p>

      <div
        className="video-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          className={`video-slide ${isHovered ? 'slide-in' : 'slide-out'}`}
          autoPlay
          loop
          muted
          src={videoSrc} 
        />
      </div>
    </div>
  );
};

export default WebDevelopment;
