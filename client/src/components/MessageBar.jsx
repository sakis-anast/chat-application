import React from "react";
import { useState } from "react";
import "../styles/MessageBar.scss";

function MessageBar({ handleMessage }) {
  const [message, setMessage] = useState("");
// send message and than clear the input
  const sendMessage = (event) => {
    event.preventDefault();
    if (message.length > 0) {
      handleMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="msg-bar-container">
      <form className="msg-bar-form" onSubmit={(e) => sendMessage(e)}>
        <input
          type="text"
          placeholder="Type Your Message Here"
          className="msg-bar-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="submit">Send</button>
      </form>
    </div>
  );
}

export default MessageBar;
