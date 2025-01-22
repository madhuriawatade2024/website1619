import React, { useState, useEffect ,useRef } from "react";
import "./AnotherGifPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles
import Services from "./Services";
import { useNavigate } from "react-router-dom";
import HobbiesTimelineSlider from './HobbiesTimelineSlider';


const AnotherGifPage = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState("menu");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const navigate = useNavigate(); 
  const handleSlideToggle = () => {
    setIsSlideOpen(!isSlideOpen);
  };
  const gifContainerRef = useRef(null);

  useEffect(() => {
    if (!gifContainerRef.current) return;

    const gifContainer = gifContainerRef.current;
    const blurCursor = document.createElement("div");
    blurCursor.classList.add("cursor-blur");
    gifContainer.appendChild(blurCursor);

    const handleMouseMove = (e) => {
      const rect = gifContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      blurCursor.style.left = `${x}px`;
      blurCursor.style.top = `${y}px`;
    };

    gifContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      gifContainer.removeEventListener("mousemove", handleMouseMove);
      blurCursor.remove();
    };
  }, []);



  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent the default link navigation
    setIsContactFormOpen(true); // Show the contact form
    setIsSlideOpen(false); // Close the slide menu
    setCurrentSlide("contact"); // Switch to contact form state
  };

  const handleMenuClick = (menu) => {
    setCurrentSlide(menu);
    if (menu === "home") {
      navigate("/"); // Navigate to Home
    } else {
      setIsSlideOpen(true); // Open the slide
    }
  };
  
  const handleCloseForm = () => {
    setIsContactFormOpen(false);
    setIsSlideOpen(false); // Close the slide
  };
  




  return (
    <div  ref={gifContainerRef}  className="another-gif-page">
            <header className={`page-header ${isContactFormOpen ? "hidden-header" : ""}`}>

        <nav className={`nav ${isSlideOpen ? "hidden" : ""}`}>
          
          <ul className="nav-links">
            <li>
            <a href="#" onClick={() => handleMenuClick("home")}>
                Home
              </a>
            </li>
         
            <li>
              <a href="#projects" onClick={() => handleMenuClick("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => handleMenuClick("skills")}>
                Skills
              </a>
            </li>
            <li>
            <a href="#" onClick={handleContactClick}> 
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="menu-icon" onClick={handleSlideToggle}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </header>
       
      <img
        src={require("../assets/another-gif.gif")}
        alt="Full-Screen GIF"
        className="full-screen-gif"
      />
         <section id="services">
        <Services />
      </section>
      <section id="hobbies-timeline">
        <HobbiesTimelineSlider />
      </section>
     
      <div
        className={`slide-page ${
          isSlideOpen && currentSlide === "menu" ? "slide-in" : ""
        }`}
      >
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

      <div
        className={`slide-page projects-slide ${
          isSlideOpen && currentSlide === "projects" ? "slide-in" : ""
        }`}
      >
        <div className="page-content">
          {currentSlide === "projects" && (
            <div className="flip-cards">
              {/* Project 1 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={require("../assets/project1.webp")}
                      alt="Webinar Admin"
                    />
                  </div>
                  <div className="flip-card-back">
                    <h3>Webinar Admin</h3>
                    <p>Sep 2021 - Mar 2024</p>
                    <p><strong>Role:</strong> Team Member</p>
                    <p><strong>Technologies:</strong> Spring Boot, React.js</p>
                    <p>
                      <strong>Description:</strong> Webinar portal used for
                      creating numerous virtual events.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={require("../assets/project2.jpg")}
                      alt="People First"
                    />
                  </div>
                  <div className="flip-card-back">
                    <h3>People First</h3>
                    <p>Sep 2022 - Mar 2024</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                      <li>RESTful API design & documentation.</li>
                      <li>Google Analytics report generation.</li>
                      <li>Server setup and deployment.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={require("../assets/project3.webp")}
                      alt="Survey Portal"
                    />
                  </div>
                  <div className="flip-card-back">
                    <h3>Survey Portal</h3>
                    <p>Sep 2021 - Mar 2024</p>
                    <p><strong>Role:</strong> Team Member</p>
                    <p><strong>Technologies:</strong> Spring Boot, React.js</p>
                    <p>
                      <strong>Description:</strong> A platform for creating
                      surveys to collect valuable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`slide-page skills-slide ${
          isSlideOpen && currentSlide === "skills" ? "slide-in" : ""
        }`}
      >
        <div className="page-content">
          {currentSlide === "skills" && (
            <>
              <h1 className="page-title">Skills</h1>
              <div className="ring-container">
                <img
                  src={require("../assets/skills-image.png")}
                  alt="Skills"
                  className="rotating-ring"
                />
              </div>

            </>
          )}
        </div>
      </div>
      <div
        className={`slide-page services-slide ${
          isSlideOpen && currentSlide === "services" ? "slide-in" : ""
        }`}
      >
        <div className="page-content">
          <Services /> 
         
          
        </div>
        
      </div>
     

      
      {/* Contact Form */}
      
      <div
        className={`contact-form-section ${isContactFormOpen ? "slide-in" : "slide-out"}`}
      >
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <br></br>
            <button type="submit" className="submit-button">Submit</button>
          </form>
          <span className="close-button" onClick={handleCloseForm}>
            &times;
          </span>
        </div>
        
      </div>

    </div>
  );
};

export default AnotherGifPage;
