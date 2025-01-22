import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import img1 from "../assets/path_to_image_1.jpg";
import img2 from "../assets/path_to_image_2.avif";
import img3 from "../assets/path_to_image_3.jpg";


const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">What Services You Will Get From Me</h2>
      <div className="services-boxes">
        {[ 
          { title: "UI/UX Design", desc: "Crafting user-friendly designs.", img: img1, link: "/ui-ux-design" },
          { title: "Web Development", desc: "Building responsive websites.", img: img2, link: "/web-development" },
          { title: "Mobile App Design", desc: "Designing seamless apps.", img: img3, link: "/mobile-app-design" }
        ].map((service, index) => (
          <Link to={service.link} key={index} className="service-box-link">
            <div className="service-box">
              <img src={service.img} alt={service.title} />
              <div className="overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Services;
