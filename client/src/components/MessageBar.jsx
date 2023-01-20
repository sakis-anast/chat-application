import React from 'react'
import "../styles/MessageBar.scss";
function MessageBar() {

  return (
    <div className="msg-bar-container">
      <input type="text" placeholder="Message" className="msg-bar-input"/>
      <button className="msg-bar-btn">Send</button>
    </div>
  )
}

export default MessageBar;