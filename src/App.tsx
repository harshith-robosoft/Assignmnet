import React from "react";
import logo from "../../passwordmanager/src/Images/logo.png";
import "./App.css";
import Input from "./Components/input/Input";
import Button from "./Components/button/Button";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Success from "./Components/success/Success";
import HomePage from "./Pages/HomePage";
import Logo from "./Components/logo/logo";
import { Routes, Route } from "react-router-dom";
import Signinfull from "./signin/Signinfull";
import SignupFull from "./signup/SignupFull";
import HomePgdata from "./Pages/HomePgdata";

function App() {
  const auth = localStorage.getItem("auth");
  console.log(auth);
  return (
    // <div>
    // <div className="loginBackground">
    //   <div className="loginLeft">
    //     <img className="logo" src="/images/logo.png" alt="picture" />
    //     <p className="loginleftfont">
    //       Protect & Manage every password in your business
    //     </p>
    //   </div>
    //   <div className="seperate"></div>

    //   <Signin/>
    //   {/* <Signup/> */}

    // </div>
    //  <Success/>
    //  </div>
    <div>
      <Routes>
        <Route path="/" element={<Signinfull />} />
        <Route path="*" element={<Signinfull />} />
        <Route path="/signup" element={<SignupFull />} />
        {/* <Route path="/Homepage" element={<HomePage/>} /> */}
        <Route
          path="/Homepagedata"
          element={auth == "true" ? <HomePgdata /> : <Signinfull />}
        />
      </Routes>
    </div>
  );
}

export default App;
