import "../../styles/UserHomepage.scss";
function UserHomepage(){
    return(
        <div className="homepage-container">

            <div className="homepage-nav-container">

                <nav className="homepage-nav">

                    <div className="homepage-user-profile-pic-container">
                        
                        <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" className="homepage-user-profile-pic"/>
                        
                    </div>
                    <div className="homepage-logout-btn-container">
                        
                        <button className="homepage-logout-btn">Logout</button>
                    </div>  
                </nav>

                <div className="homepage-body-container">

                    <div className="homepage-body-userlist-container">
                        USERLIST

                    </div>

                    <div className="homepage-body-chatarea-container">

                        <div className="chatarea">
                            Chat area
                        </div>

                        <div className="chatarea-inputs">
                            
                            
                            <div className="chatarea-input-container">
                                <label htmlFor="chat-input"></label>
                                <input type="text" className="chatarea-input"/>
                            </div>
                            
                            <div className="chatarea-btn-container">
                                <button className="chatarea-btn">Send</button>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default UserHomepage;