import React from "react";
import Logo from "../Components/logo/logo";
import Signin from "../signin/Signin";
import Signup from "./Signup";

const SignupFull = () => {
  return (
    <div className="signInContainer">
      <div className="sign-body">
        <Logo />
        <div className="seperate"></div>
        <Signup />
      </div>
    </div>
  );
};

export default SignupFull;
