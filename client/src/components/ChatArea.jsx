import Logout from "./Logout";
import axios from "axios";
import MessageBar from "./MessageBar";
import "../styles/ChatArea.scss";
import React , {useEffect , useState} from "react";
function ChatArea({currentChat , user }){
    const [messages, setMessages] = useState([]);

    useEffect( () => {
      async function getMessages(){
      const data = await JSON.parse(
        localStorage.getItem("user")
      );
      const response = await axios.post("http://localhost:3001/message/get", {
        from: data._id,
        to: currentChat._id,
      });
      setMessages(response.data);
    }
    getMessages()
  }, [currentChat]);
 
const handleMessage =async (msg)=>{
    await axios.post("http://localhost:3001/message",{
        from : user._id,
        to : currentChat._id,
        message : msg
    })

}

    return(
        <>
        {currentChat && (<div className="chat-container">
            <div className="chatHeader">
                <div className="chatDetails">
                    <div className="chatUsername">
                        {currentChat.username}
                    </div>
                </div>
                <Logout/>
            </div>
            <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div >
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
            <MessageBar
            handleMessage = {handleMessage}
            />
            
        </div>)}
        </>);
}

export default ChatArea;