// Inside TokenExpirationPopup.js
import React from "react";

const TokenExpirationPopup = ({ onRefresh, onClose }) => {
  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    zIndex: "999",
  };

  const contentStyle = {
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "10px",
    cursor: "pointer",
  };

  const messageStyle = {
    fontSize: "20px", // Adjust the font size as needed
    marginBottom: "15px", // Optional: Add margin bottom for better spacing
  };

  return (
    <div style={popupStyle}>
      <div style={contentStyle}>
        <p style={messageStyle}>Your current session is about to end. Do you want to reload your token?</p>
        <div>
          <button style={buttonStyle} onClick={onRefresh}>
            Refresh
          </button>
          <button style={buttonStyle} onClick={onClose}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenExpirationPopup;
