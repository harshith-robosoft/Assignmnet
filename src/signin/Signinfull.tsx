import { Sign } from "crypto";
import React from "react";
import Logo from "../Components/logo/logo";
import Signin from "./Signin";

const SigninFull = () => {
  return (
    <div className="signInContainer">
      <div className="sign-body">
        <Logo />
     
      <div className="seperate"></div>
  
        <Signin />
      
    </div>
    </div>
  );
};

export default SigninFull;
