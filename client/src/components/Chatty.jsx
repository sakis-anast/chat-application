import React from "react";
import Users from "./Users";
import { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router";
import "../styles/Chatty.scss";
 
function Chatty(){
const [users , setUsers] = useState([])
const [ user , setUser]= useState(undefined)
const [ currentChat , setCurrentChat] = useState(undefined)
const navigate = useNavigate()

useEffect( () => {
    async function fetchData(){
        if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
        setUser(await JSON.parse(localStorage.getItem("user")))
    }} 
    fetchData()
  }, []);

useEffect(()=>{
    async function fetchData(){
        if(user){
    const data = await axios.get(`http://localhost:3001/users/${user._id}`)
    setUsers(data.data)
 }
 }fetchData()
},[user]
)

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



