import React from "react";
import { useState, useEffect } from "react";
import logo from "../logo_transparent.png";
function Users({ users, user, setCurrentChat }) {
  const [username, setUsername] = useState(undefined);
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    async function username() {
      const data = await JSON.parse(localStorage.getItem("user"));
      setUsername(data.username);
    }
    username();
  }, []);
  const changeChat = (index, contact) => {
    setSelected(index);
    setCurrentChat(contact);
  };
  return (
    <>
      {
        <div className="usersContainer">
          <div className="info">
            <img src={logo} alt="logo" />
            <h4>Chatty</h4>
            <div className="user">Welcomes {username}</div>
          </div>
          <div className="users">
            {users.map((contact, index) => {
              return (
                <div
                  className={`contact ${index === selected ? "selected" : ""}`}
                  key={index}
                  onClick={() => changeChat(index, contact)}
                >
                  <div className="user">
                    <p> {contact.username}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}

export default Users;
