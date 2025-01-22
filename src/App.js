import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AnotherGifPage from "./components/AnotherGifPage";
import Footer from './components/SlideshowFooter.js';
import './App.css';
import ParticlesCursor from "./components/ParticlesCursor";
import Services from './components/Services';
import UIUXDesign from './components/UIUXDesign';
import WebDevelopment from './components/WebDevelopment';
import MobileAppDesign from './components/MobileAppDesign';
import FadeSlide from "./components/FadeSlide";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import audioSrc from './assets/audio.mp3';

const App = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [showFadeSlide, setShowFadeSlide] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleUserInteraction = () => {
    if (!audioPlayed) {
      const audio = document.getElementById("global-audio");
      if (audio) {
        audio.play();
        setAudioPlayed(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [audioPlayed]);

  useEffect(() => {
    const timer = setTimeout(() => setShowFadeSlide(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        <ParticlesCursor />
        <audio
          id="global-audio"
          src={audioSrc} 
          loop
          autoPlay
          muted={isMuted}
        />
        <button
          className="mute-button"
          onClick={toggleMute}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            border: "none",
            borderRadius: "50%",  
            cursor: "pointer",
            display: "flex", 
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {isMuted ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />}
        </button>
        {showFadeSlide ? (
          <FadeSlide />
        ) : (
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-app-design" element={<MobileAppDesign />} />
            <Route path="/another-gif-page" element={<AnotherGifPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
