import { useState } from "react";

import "../../styles/SignupLogin.scss";

function SignupLogin(){

    let [toggle, setToggle] = useState(false);

    function toggler(){
        setToggle(!toggle);
    }

    return( (toggle) ?

        <div className="form-container">
 
            <div className="form-field">

                    <div className="form-header-container">
                        <h1 className="form-header">Login</h1>
                    <div/>
                        
                    <div className="inputs-container">

                        <label for="username">Username</label>
                        <input type="text"/>


                        <label for="password">Password</label>
                        <input type="password"/>

                        <button onClick={toggler}>i don't have an account</button>
                        <button>Sign Up</button>

                    </div>
                </div>
            </div>
        </div>
        :(<div className="form-container">
 
        <div className="form-field">

                <div className="form-header-container">
                    <h1 className="form-header">Sign up</h1>
                <div/>
                    
                <div className="inputs-container">

                    <label for="username">Username</label>
                    <input type="text"/>

                    <label for="email">Email</label>
                    <input type="email"/>

                    <label for="password">Password</label>
                    <input type="password"/>
                    <button onClick={toggler}>I already have an account</button>
                     
                    <button>Sign Up</button>

                </div>
            </div>
        </div>
    </div>)

    );
}
export default SignupLogin;