//importing router route & routes
import {Routes, Route} from "react-router-dom";

//importing components
import SignupLogin from "../src/components/signup-login/SignupLogin";
import UserHomepage from "../src/components/user-homepage/UserHomepage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<UserHomepage/>}></Route>
    </Routes>
  );
}

export default App;
