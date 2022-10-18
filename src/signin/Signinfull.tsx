import { Sign } from "crypto";
import React from "react";
import Logo from "../Components/logo/logo";
import Signin from "./Signin";

const Signinfull = () => {
  return (
    <div className="signInContainer">
      <div className="sign-body">
        <Logo />
      </div>
      {/* <div className="seperate"></div> */}
      <div className="signContainer">
        <Signin />
      </div>
      
    </div>
  );
};

export default Signinfull;
