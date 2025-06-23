import React from "react"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // Corrected import
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"


const routes = (
<Router>
      <Routes>
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signUp" exact element={<SignUp />} />

      </Routes>
    </Router>
);
function App() {
  return (
    <div className="font-poppins bg-[#fdfeff] overflow-x-hidden min-h-screen">{routes}</div>
  )
};

export default App;