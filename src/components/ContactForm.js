import React from "react";
import "./ContactForm.css";

const ContactForm = ({ onClose }) => {
  return (
    <div className="contact-form-overlay">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
