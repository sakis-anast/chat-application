//importing router route & routes
import {Routes, Route} from "react-router-dom";

//importing components
import SignupLogin from "../src/components/signup-login/SignupLogin";

function App() {
  return (
    <Routes>
        <Route path="/" element={<SignupLogin/>}></Route>
    </Routes>
  );
}

export default App;
