import React, { useState, useEffect } from "react";
import "../styles/Welcome.scss";
const logo = require("../welcome.gif");



function Welcome() {


  return (
    <div className="welcome-container">

        <div className="welcome-img-container">
            <img src={logo} alt="" />
        </div>
      
      <div className="welcome-heading-container">
        <h1>
            Welcome, <span>User</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
        
    </div>
  );
}
export default Welcome;