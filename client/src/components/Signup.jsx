import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "../styles/Signup.scss";


function Signup(){

    const navigate = useNavigate();

    //user input values
    let [values, setValues] = useState({
        username:"",
        email:"",
        password:""
    });

    //handel input change
    const changeHandler = (event) => {
        setValues(
            {...values, [event.target.name] : event.target.value}
        );
    };

    const validationHandler = (event) => {
        const {username, email, password} = values;
       if(username == ""){
            alert("enter username");
            return false;
       }
       else if(username.length < 3){
        alert("username must be at least 3 characters long.");
        return false;
       }
       else{
        return true;
       }
    }

    const submitHandler =  async (event) => {
        event.preventDefault();
        if(validationHandler()){

            const {username, email, password} = values;
            await axios.post("http://localhost:3001/users/signup", {username,email,password})
                        .then(({ data }) => {
                            if (data.message === true) {
                            navigate("/login");
                            } else {
                            alert(data.message);
                            }
                        });
        }
    };



    return(
        <>
            <div className="signup-form-container">
                <form action="" className="signup-form-field" onSubmit={(e) => submitHandler(e)}>
                    <div  className="signup-form-div">
                        <img src="" alt="" className="signup-form-img"/>
                        <h1 className="signup-form-header">Sign up</h1>
                    </div>
                    <div className="signup-inputs-container">
                        <input type="text" placeholder="username" name="username" onChange={(e) => changeHandler(e)}/>
                        <input type="text" placeholder="email" name="email" onChange={(e) => changeHandler(e)}/>
                        <input type="text" placeholder="password" name="password" onChange={(e) => changeHandler(e)}/>
                        <button>Create User</button>
                        <span>I already have an account ? <Link to="/login">Login</Link></span>
                    </div>

                </form>
            </div>
            
        </>
    );
}
export default Signup;