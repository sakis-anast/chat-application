import React from 'react'
import {  useState , useEffect} from 'react';
function Users({users , user , handleChange}) {
    const [username , setUsername]= useState(undefined)
    const [selected , setSelected]= useState(undefined)

    useEffect(()=>{
        if (user){
            setUsername(user.username)
        }
    },[user]
    ) 
    const changeChat= (index , contact)=>{
        setSelected(index)
        handleChange(contact)
    }
  return <>
    {user ? 
        <div className='usersContainer'>
            <div className='info'>
            <img src="" alt="logo" />
            <h4>Chatty</h4>
            </div>
            <div className="users">
                { users.map((contact, index)=>{
                    return(
                        <div className={`contact ${index === selected? "selected" : ""}`} 
                        key={index}
                        onClick={()=>changeChat(index , contact)}>
                            <div className="users">
                                <p> {contact.username}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="user">
                    <p>{username}</p>
                </div>

            </div>

        </div>
        : <div></div>
    }
    </>
  }



export default Users;


// .usersContainer
//   {display: grid;
//   grid-template-rows: 10% 75% 15%;
//   overflow: hidden;}
//   .info {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 2rem;
//     }
//   }
//   .users {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     overflow: auto;
//     gap: 0.8rem;
//     &::-webkit-scrollbar {
//       width: 0.2rem;
//       &-thumb {
//         background-color: #ffffff39;
//         width: 0.1rem;
//         border-radius: 1rem;
//       }
//     }
//     .contact {
//       background-color: #ffffff34;
//       min-height: 5rem;
//       cursor: pointer;
//       width: 90%;
//       border-radius: 0.2rem;
//       padding: 0.4rem;
//       display: flex;
//       gap: 1rem;
//       align-items: center;
//       .username {
//         h3 {
//           color: white;
//         }
//       }
//     }
//     .selected {
//       background-color: #9a86f3;
//     }
//   }
//   .user {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//     }

   