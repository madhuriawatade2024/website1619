import React, { useState, useEffect } from 'react';
import './HobbiesTimelineSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCode, faGuitar, faPaintBrush, faPlane } from '@fortawesome/free-solid-svg-icons';

const HobbiesTimelineSlider = () => {
  const hobbies = [
    { year: '2015', hobby: 'Started Photography', icon: faCamera, color: '#ff6347' }, 
    { year: '2017', hobby: 'Developed a Passion for Coding', icon: faCode, color: '#32cd32' }, 
    { year: '2019', hobby: 'Learning Guitar', icon: faGuitar, color: '#ffa500' }, 
    { year: '2021', hobby: 'Exploring Digital Art', icon: faPaintBrush, color: '#9370db' }, 
    { year: '2023', hobby: 'Traveling and Blogging', icon: faPlane, color: '#00bfff' }, 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hobbies.length]);

  return (
    <div className="hobbies-timeline">
      <h2 className="timeline-title">My Hobbies Journey</h2>
      <div className="timeline-container">
        <div
          className="timeline-item"
          key={hobbies[currentIndex].year} 
        >
          <FontAwesomeIcon
            icon={hobbies[currentIndex].icon}
            className="timeline-icon"
            style={{ color: hobbies[currentIndex].color }} 
          />
          <div className="timeline-year">{hobbies[currentIndex].year}</div>
          <div className="timeline-hobby">{hobbies[currentIndex].hobby}</div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesTimelineSlider;
