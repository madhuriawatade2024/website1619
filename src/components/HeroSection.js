import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import SlideshowFooter from '../components/SlideshowFooter';  
import ScrollingWorkflowPage from '../components/ScrollingWorkflowPage';



const HeroSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isHolding, setIsHolding] = useState(false); 

  // Detect when the section is in view
  const handleScroll = () => {
    const section = document.getElementById("scroll-section");
    const sectionPosition = section.getBoundingClientRect().top;

    if (sectionPosition <= window.innerHeight * 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  
  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  const handleMouseLeave = () => {
    setIsHolding(false);
  };

  return (
    <div>
      <div className="hero-container">

            <a
          href={require("../assets/MadhuriAwatade_cv.pdf")}
          download="MadhuriAwatade_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-cv-button"
        >
        <i className="fas fa-download"></i> Download CV
      </a>
        <img
          src={require("../assets/my-hero-gif.gif")}
          alt="Hero Background GIF"
          className="hero-gif"
        />
        <div className="hero-content">
          <h1>Building Innovative Solutions with Full-Stack Expertise</h1>
          <p>My journey starts here</p>
          <button
            className="cta-button"
            onClick={() => navigate("/another-gif-page")}
          >
           Explore My Work
          </button>
         
        </div>
      </div>

      {/* Scrollable Section */}
      <div
          id="scroll-section"
          className={`scroll-section ${isVisible ? "fade-in" : ""}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
         >
          {/* Animated Text Above the GIF */}
          <div className="animated-text">
            <h2>Fullstack Developer</h2>
            <p>Hello! I'm Madhuri Awatade, a passionate Full Stack developer and Freelancer with a keen eye for creating beautiful, functional, and user-friendly websites. With 2+ year of experience in the industry, I've had the pleasure of working on a wide range of projects, from small business websites to large-scale web applications.</p>
          </div>

          {/* Scrollable GIF */}
          <img
            src={require("../assets/your-gif-file.gif")}
            alt="Scrollable GIF"
            className={`scrollable-gif ${isHolding ? "hold-animation" : ""}`}
          />
            
        </div>

            <ScrollingWorkflowPage />
            <SlideshowFooter />


    </div>
  );
};

export default HeroSection;









