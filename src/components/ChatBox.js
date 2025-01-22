import React, { useState } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { sender: "user", text: inputMessage }]);
      setInputMessage("");
    }
  };

  return (
    <div className={`chatbox-container ${isOpen ? "open" : "closed"}`}>
      {/* Chatbox Header */}
      <div className="chatbox-header" onClick={toggleChatBox}>
        <span>Chat with Us</span>
        <span className="toggle-icon">{isOpen ? "−" : "+"}</span>
      </div>

      {/* Chatbox Body */}
      {isOpen && (
        <div className="chatbox-body">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          {/* Chat Input */}
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
