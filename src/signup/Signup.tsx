import React, { useState } from "react";
import "../App.css";
import Input from "../Components/input/Input";
import Button from "../Components/button/Button";
import Logo from "../Components/logo/logo";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  type usersType = { mobileNo: number; mPin: number };
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

  const signUpHandler = (e: any) => {
    e.preventDefault();

    const mobileNo: number = e.target.mobileNo.value;
    const newMPin: number = e.target.mpin.value;
    const confirmMpin: number = e.target.confirmMPin.value;

    const userData = { mobileNo, mPin: newMPin };

    const previousData: usersType[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    console.log("userData", previousData);
    console.log("userData", { mobileNo, newMPin });
    if (previousData.length > 0 && mobileNo) {
      const mappedUser = previousData.map((user) => {
        if (user.mobileNo === mobileNo) {
          return "user";
        }
        return "no user";
      });

      if (newMPin === confirmMpin) {
        if (mappedUser.includes("user")) {
          alert("user already exist");
        } else if (mappedUser.includes("no user")) {
          previousData.push(userData);
          sessionStorage.setItem("signUpSuccess", "true");
          navigate("/");

          localStorage.setItem(JSON.stringify(mobileNo), "[]");
          window.location.reload();
        }
      } else {
        alert("mPin does not match");
      }

      console.log("pre", previousData);
      localStorage.setItem("users", JSON.stringify(previousData));
    } else if ((previousData.length = 0 && mobileNo)) {
    }
  };
  return (
    <div>
      <div className="loginBackground-part-r">
        <div className="loginRight">
          <span className="loginhead">SIGN UP</span>
          <form onSubmit={signUpHandler}>
            <div className="mobile">
              {/* <Input placeholder="Enter Mobile Number"/> */}
              <input
                className="input-box"
                name="mobileNo"
                id="mobile"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="mpin">
              {/* <Input placeholder="Enter 4 Digit MPin"/> */}
              <input
                className="input-box"
                name="mpin"
                id="mobile"
                type="text"
                placeholder="Enter 4 Digit MPin"
              />
            </div>
            <div className="mpin">
              {/* <Input placeholder="Re-Enter 4 Digit MPin"/> */}
              <input
                className="input-box"
                name="confirmMPin"
                id="mPin"
                type="text"
                placeholder="Re-Enter 4 Digit MPin"
              />
              <div className="eye">
                <img
                  src="/images/eye_on.png"
                  alt="eye"
                  onClick={togglePassword}
                />
              </div>
            </div>
            {/* <Button value="SIGN UP" /> */}
            <div className="signinbtn">
              <input type="submit" value="SIGN UP" className="signup-btn-txt" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
