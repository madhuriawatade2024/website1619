import React, { useState } from "react";
import "./GlobalMusicPlayer.css"; 
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; 

const GlobalMusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false); 

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      {/* Global Music Player */}
      <audio
        src={require("../assets/audio.mp3")}
        loop
        autoPlay
        muted={isMuted} 
      />
      
      {/* Mute Button */}
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
        }}
      >
        {isMuted ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />} 
      </button>
    </div>
  );
};

export default GlobalMusicPlayer;
