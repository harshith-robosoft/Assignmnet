import React from "react";
import logo from "../../passwordmanager/src/Images/logo.png";
import "./App.css";
import Input from "./Components/input/Input";
import Button from "./Components/button/Button";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Success from "./Components/success/Success";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    // <div classname="sign-body">
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
    <HomePage/>
    </div>
  );
}

export default App;
