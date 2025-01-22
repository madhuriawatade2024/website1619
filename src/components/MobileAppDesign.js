import React, { useEffect } from 'react';
import './MobileAppDesign.css';

const MobileAppDesign = () => {
  useEffect(() => {
   
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="mobile-app-container">
      <header>
        <h1 className="gooey-text">Mobile App Design</h1>
        <p className="gooey-text-subtitle">
          Seamlessly designed user-friendly apps for all devices.
        </p>
        <div className="extra-description">
          <h2 className="talented-heading">Transforming Ideas into Intuitive Mobile Experiences</h2>
          <p className="talented-description">
            With a passion for creating innovative and seamless mobile applications, I specialize in delivering cutting-edge solutions that not only meet but exceed client expectations. From conceptualizing user interfaces to building robust, scalable app architectures, my expertise ensures that every project is delivered with precision, efficiency, and user-centric design.
          </p>
          <p className="talented-description">
            Whether it's crafting beautiful designs, optimizing performance, or implementing advanced features, I focus on delivering an exceptional user experience. I integrate the latest technologies with a keen attention to detail, making sure each app runs smoothly across devices, delivering top-tier performance every time.
          </p>
          <p className="talented-description">
            Let's build the next big thing together—an app that stands out in functionality, design, and user engagement.
          </p>
        </div>
      </header>

      
      <div className="parallax-container">
        <video className="parallax-video" autoPlay loop muted>
          <source src={require('../assets/your-video-url.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

     
      <div className="parallax-image-gallery">
        <div className="parallax-image" style={{ backgroundImage: `url(${require('../assets/image1.jpg')})` }}></div>
        <div className="parallax-image" style={{ backgroundImage: `url(${require('../assets/image2.jpg')})` }}></div>
        <div className="parallax-image" style={{ backgroundImage: `url(${require('../assets/image3.jpg')})` }}></div>
        <div className="parallax-image" style={{ backgroundImage: `url(${require('../assets/image4.jpg')})` }}></div>
        <div className="parallax-image" style={{ backgroundImage: `url(${require('../assets/image5.jpg')})` }}></div>
        <div className="parallax-image" style={{ backgroundImage: `url(${require('../assets/image6.jpg')})` }}></div>
      </div>
    </div>
  );
};

export default MobileAppDesign;
