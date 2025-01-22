import React from 'react';
import './UIUXDesign.css';
import MemoGrid from '../components/MemoGrid';

const UIUXDesign = () => {
  return (
    <div className="container">
      <div className="uiux-section">
        <h1>UI/UX Design</h1>
        <p className="intro-text">This is where detailed information about UI/UX design services will be displayed.</p>
        <p className="float-text">
  We focus on creating user-friendly designs that deliver exceptional experiences for users.
</p>

        <p className="float-text">
          Our approach to UI/UX design incorporates user research, wireframing, prototyping, and high-fidelity mockups. We prioritize usability and accessibility to ensure that every design caters to a diverse user base.
        </p>
        <p className="cta-text">Let’s build a product that your users will love to interact with!</p>
      </div>

      <div className="memo-grid-container">
        <MemoGrid />
      </div>
    </div>
  );
};

export default UIUXDesign;
