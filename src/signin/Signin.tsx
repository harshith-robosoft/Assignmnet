import React, { useState } from "react";
import "../App.css";
import Input from "../Components/input/Input";
import Button from "../Components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/logo/logo";

const Signin = () => {
  const navigate = useNavigate();
  const [togglePass, setTogglePass] = useState(false);

  if (localStorage.getItem("users") === null) {
    localStorage.setItem(
      "user Data",
      JSON.stringify(
        localStorage.setItem(
          "users",
          JSON.stringify([{ mobileNo: "8884648267", mPin: "1234" }])
        )
      )
    );
  }

  const togglePassword = () => {
    setTogglePass(!togglePass);
  };

  const loginHandler = (e: any) => {
    e.preventDefault();
    type usersType = { mobileNo: number; mPin: number };
    console.log(e.target);

    const mobileNo = e.target.mobileNo.value;
    const mPin = e.target.mPin.value;

    const userData = { mobileNo, mPin };
    console.log("userData", userData);

    const users: usersType[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    console.log("users", users);

    for (let i = 0; i < users.length; i++) {
      if (userData.mobileNo === users[i].mobileNo) {
        if (userData.mPin === users[i].mPin) {
          localStorage.setItem("auth", "authenticated");
          navigate("/Homepage");
          localStorage.setItem("currentUser", mobileNo);
          window.location.reload();
        }
      }
      // else {
      //   alert("Please enter the right details.");
      // }
    }
  };

  return (
    <div className="loginBackground-part-r">
      <div className="loginRight">
        <span className="loginhead">SIGN IN TO YOUR ACCOUNT</span>
        <form onSubmit={loginHandler}>
          <div className="mobile">
            <input
              name="mobileNo"
              id="mobile"
              className="input-box"
              type="text"
              placeholder="Mobile Number"
            />
            {/* <Input placeholder="Mobile Number"/> */}
          </div>
          <div className="mpin">
            <input
              type={togglePass ? "text" : "password"}
              name="mPin"
              id="mPin"
              className="input-box"
              maxLength={4}
              placeholder="Mpin"
            />
            {/* <Input placeholder="MPin"/> */}

            <div className="eye">
              <img
                src="/images/eye_on.png"
                alt="eye"
                onClick={togglePassword}
              />
            </div>
          </div>
          <div className="loginRightBtm">
            <span className="f-password">Forgot your password?</span>
            <button className="signinbtn">
              <text className="signin-btn-txt">SIGN IN</text>
            </button>
            {/* <Link to="/signup">
          <Button value="SIGN IN" />
          </Link> */}
            <span className="dont-account">
              Don’t have a Account? <Link to="/signup">SIGNUP</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
