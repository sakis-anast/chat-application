import React, { useState, useEffect } from "react";
import "../styles/Welcome.scss";

function Welcome({ user }) {
  return (
    <div className="welcome-container">
      <div className="welcome-heading-container">
        <h1>Welcome, {user.username}</h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
    </div>
  );
}
export default Welcome;
