//importing router route & routes
import {BrowserRouter, Routes, Route} from "react-router-dom";

//importing components
import Signup from "./components/Signup";
import Chatty from "./components/Chatty";
import Login from "./components/Login";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/chat" element={<Chatty/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
