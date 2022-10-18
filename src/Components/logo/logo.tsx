import React from "react";
import Signin from "../../signin/Signin";
import "../../App.css";

const Logo = () => {
  return (
    <div className="loginBackground-part-l">
      <div className="loginLeft">
        <img className="logo" src="/images/logo.png" alt="picture" />
        <p className="loginleftfont">
          Protect & Manage every password in your business
        </p>
      </div>
      {/* <Success/>  */}
    </div>
  );
};

export default Logo;
