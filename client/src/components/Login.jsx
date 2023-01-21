import { useState , useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "../styles/Login.scss";


function Login() {

    const logo = require("../logo_transparent.png");
    const navigate = useNavigate();

     //user input values
     let [values, setValues] = useState({
        username:"",
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
       if(username === ""){
            alert("username is required");
            return false;
       }
       else if(password === ""){
        alert("password is required");
        return false;
       }
       else{
        return true;
       }
    }

    useEffect(() => {
        if (localStorage.getItem("user")) {
          navigate("/chat");
        }
      }, []);

    const submitHandler =  async (event) => {
        event.preventDefault();
        if(validationHandler()){

            const {username, password} = values;
            await axios.post("http://localhost:3001/users/login", {username,password})
                        .then(({ data }) => {
                            if (data.message === true) {
                                localStorage.setItem(
                                    "user",
                                    JSON.stringify(data.user)
                                  );
                            navigate("/chat");
                            } else {
                            alert(data.message);
                            }
                        });
        }
    };
  
    return (
    <>
        <div className="login-form-container">
            <form action="" className="login-form-field" onSubmit={(e) => submitHandler(e)}>
                <div className="login-form-div">
                    <img src={logo} alt="" className="login-form-img"/>
                    <h1 className="login-form-header">Login</h1>
                </div>
                <div className="login-inputs-container">
                    <input type="text" placeholder="username" name="username" onChange={(e) => changeHandler(e)} />
                    <input type="text" placeholder="password" name="password" onChange={(e) => changeHandler(e)} />
                    <button>Login</button>
                    <span>don't have an account ?<Link to="/"> Signup</Link></span>
                </div>

            </form>
        </div>
    </>
  );
}

export default Login