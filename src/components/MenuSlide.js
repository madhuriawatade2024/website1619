// MenuSlide.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuSlide.css';



const MenuSlide = ({ isSlideOpen, currentSlide, handleMenuClick, handleContactClick }) => {
  const navigate = useNavigate();

  return (
    <div className={`slide-page ${isSlideOpen && currentSlide === "menu" ? "slide-in" : ""}`}>
      <div className="page-content">
        {currentSlide === "menu" && (
          <>
            <h1 className="page-title" onClick={() => handleMenuClick("projects")}>
              Projects
            </h1>
            <h1 className="page-title" onClick={() => handleMenuClick("skills")}>
              Skills
            </h1>
            <h1 className="page-title" onClick={handleContactClick}>
              Contact
            </h1>
            <h1 className="page-title" onClick={() => handleMenuClick("home")}>
              Home
            </h1>
          </>
        )}
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
