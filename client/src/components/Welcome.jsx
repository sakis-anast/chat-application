import React from "react";
import "../styles/Welcome.scss";
import Logout from "./Logout";

function Welcome({ user }) {
  return (
    <div className="welcome-container">
      <div className="welcome-heading-container">
        <h1>Welcome, {user.username}</h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
      <Logout/>
    </div>
  );
}
export default Welcome;
