import React from "react";
import Users from "./Users";
import { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router";
function Chatty(){
const [users , setUsers] = useState([])
const [ user , setUser]= useState(undefined)
const [ currentChat , setCurrentChat] = useState(undefined)
const navigate = useNavigate()
// useEffect(async () => {
//     if (!localStorage.getItem("chat-app-user")) {
//       navigate("/login");
//     } else {
//         setUser(await json.parse(localStorage.getItem("chat-app-user")))
//     }
//   }, []);

// useEffect(async()=>
//  {if(user){
//     const data = await axios.get("")
//     setUsers(data.data)
//  }
//  },[user]
// )

const handleChange =(chat)=>{
    setCurrentChat(chat)
}

    return(
        
        <div className="chatty">
            <div className="usersContainer">
                <Users  
                users={users}
                user={user}
                changeChat={handleChange}
                />

            </div>

        </div>
    );

}
export default Chatty;



//  .chatty{
//      height: 100vh;
//      width: 100vw;
//      display: flex;
//      flex-direction: column;
//      justify-content: center;
//      align-items: center;
//      border: 3px solid black;
//      .usersContainer{
//      height: 70vh;
//      width: 70vw;
//      display: grid;
//      grid-template-columns: 25% 75%;
//      border: 3px solid red;}  
//      }