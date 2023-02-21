import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Question from "./pages/Question";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
