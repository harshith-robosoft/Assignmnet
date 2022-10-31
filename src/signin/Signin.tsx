import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/logo/logo";

const Signin = () => {
  // const navigate = useNavigate();
  // const [togglePass, setTogglePass] = useState(false);

  // if (localStorage.getItem("users") === null) {
  //   localStorage.setItem(
  //     "user Data",
  //     JSON.stringify(
  //       localStorage.setItem(
  //         "users",
  //         JSON.stringify([{ mobileNo: "8884648267", mPin: "1234" }])
  //       )
  //     )
  //   );
  // }

  // const togglePassword = () => {
  //   setTogglePass(!togglePass);
  // };

  // const loginHandler = (e: any) => {
  //   e.preventDefault();
  //   type usersType = { mobileNo: number; mPin: number };
  //   console.log(e.target);

  //   const mobileNo = e.target.mobileNo.value;
  //   const mPin = e.target.mPin.value;

  //   const userData = { mobileNo, mPin };
  //   console.log("userData", userData);

  //   const users: usersType[] = JSON.parse(
  //     localStorage.getItem("users") || "[]");
  //   console.log("users", users);

  //   for (let i = 0; i < users.length; i++) {
  //     if (userData.mobileNo === users[i].mobileNo) {
  //       if (userData.mPin === users[i].mPin) {
  //         localStorage.setItem("auth", "authenticated");
  //         navigate("/Homepage");
  //         localStorage.setItem("currentUser", mobileNo);
  //         window.location.reload();
  //       }
  //     }
  //     // else {
  //     //   alert("Please enter the right details.");
  //     // }
  //   }
  // };
  const [pin, setPin] = useState<Boolean>(false);
  const navigate = useNavigate();
  const togglePin = () => {
    setPin(!pin);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    const mobile = e.target.mobile.value;
    const mPin = e.target.mPin.value;

    const newArr: any[] = [];
    const userData = JSON.parse(localStorage.getItem("users") || "[]");
    userData.map((user: any) => {
      if (mobile === user.mobile && mPin === user.mPin) {
        newArr.push("exists");
      } 
      else if (mobile === user.mobile && mPin !== user.mPin) {
        newArr.push("Invalid Pin");
      }
      else{
        newArr.push("no user")
      }
    });
    if (newArr.includes("exists")) {
      localStorage.setItem("currentUser", JSON.stringify([mobile]));
      localStorage.setItem("auth","true")
      navigate("/Homepagedata");
    } else if (newArr.includes("Invalid Pin")) {
      alert("invalid pin");
    }else if (newArr.includes("no user")) {
      alert("please sign up to continue");
    }
  };

  return (
    <div className="loginBackground-part-r">
      <div className="loginRight">
        <span className="loginhead">SIGN IN TO YOUR ACCOUNT</span>
        <form onSubmit={submitHandler}>
          <div className="mobile">
            <input
              name="mobile"
              // id="mobile"
              required
              minLength={10}
              maxLength={10}
              className="input-box"
              type="text"
              pattern="[0-9]+"
              placeholder="Mobile Number"
            />
            {/* <Input placeholder="Mobile Number"/> */}
          </div>
          <div className="mpin">
            <input
              type={pin ? "text" : "password"}
              name="mPin"
              // id="mPin"
              required
              minLength={4}
              className="input-box"
              maxLength={4}
              placeholder="Mpin"
            />
            {/* <Input placeholder="MPin"/> */}

            <div className="eye">
              <img src="/images/eye_on.png" alt="eye" onClick={togglePin} />
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
