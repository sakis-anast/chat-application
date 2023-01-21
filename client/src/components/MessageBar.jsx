import React from 'react'
import { useState } from 'react';
import "../styles/MessageBar.scss";



function MessageBar({handleChange}) {

  const [message, setMessage] = useState("");


  const sendMessage = (event) => {
    event.preventDefault();
    if(message.length > 0){
      handleChange(message);
      setMessage("");
      alert("sent");
    }
  }


  return (
    <div className="msg-bar-container">
      <form className='msg-bar-form' onSubmit={(e) => sendMessage(e)}>
        <input type="text" placeholder="Message" className="msg-bar-input" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button className="msg-bar-btn">Send</button>
      </form>
    </div>
  )
}

export default MessageBar;