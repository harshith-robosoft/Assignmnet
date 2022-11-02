
import { useState } from "react";
import { Link, useActionData } from "react-router-dom";
import "../../App.css";

const Logo = () => {
  const [display,setDisplay]=useState("none");
  const [display2,setDisplay2]=useState("block");
  function handleChange(){
    setDisplay("block")
    setDisplay2("none")
  }
  function handleChange2(){
    setDisplay2("none")
  }
  return (
    <div className="loginBackground-part-l">
      <div className="loginLeft">
        <img className="logo" src="/images/logo-only.png" alt="picture" />
        <p className="loginleftfont">
          Protect & Manage every password in your business
        </p>
      </div>
      <div className="logintop-mob">
        <img src="images/logo.png" alt="" />
        <div className="sign-log-mob" >
          <div className="si-in" >
            <Link to="/" onClick={handleChange} >
          <span className="si-in-mob">SIGN IN</span>
          <div className="sign-tabcol" style={{display:display}}></div>
          </Link>
          
          </div>
          <div className="si-up">
          <Link to="/signup" onClick={handleChange2}>
          <span className="si-in-mob">SIGN UP</span>
          <div className="sign-tabcol"  style={{display:display2}}></div>
          </Link>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
