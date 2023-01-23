import Logout from "./Logout";
import axios from "axios";
import MessageBar from "./MessageBar";
import "../styles/ChatArea.scss";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
function ChatArea({ currentChat, user, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivedMessage, setArrivedMessage] = useState(null);
  const scrollRef = useRef();
  useEffect(() => {
    async function getMessages() {
      if (currentChat) {
        const data = await JSON.parse(localStorage.getItem("user"));
        const response = await axios.post("http://localhost:3001/message/get", {
          from: data._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    }
    getMessages();
  }, [currentChat]);

  const handleMessage = async (msg) => {
    await axios.post("http://localhost:3001/message", {
      from: user._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      from: user._id,
      to: currentChat._id,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        setArrivedMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);
  useEffect(() => {
    arrivedMessage && setMessages((prev) => [...prev, arrivedMessage]);
  }, [arrivedMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      {currentChat && (
        <div className="chat-container">
          <div className="chatHeader">
            <div className="chatDetails">
              <div className="chatUsername">{currentChat.username}</div>
            </div>
            <Logout />
          </div>
          <div className="chat-messages">
            {messages.map((message) => {
              return (
                <div ref={scrollRef}>
                  <div
                    className={`message ${
                      message.fromSelf ? "send" : "receive"
                    }`}
                  >
                    <div className="content">
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <MessageBar handleMessage={handleMessage} />
        </div>
      )}
    </>
  );
}

export default ChatArea;
