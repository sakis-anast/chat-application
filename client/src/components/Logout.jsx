import {useNavigate} from "react-router-dom";
import "../styles/Logout.scss";



function Logout() {

    const navigate = useNavigate();

    const logoutHandle = () => {
        navigate("/");
    }

  return (
    <div className="logout-btn-container">
        <button className="logout-btn" onClick={logoutHandle}>Logout</button>
    </div>
  )
}

export default Logout;