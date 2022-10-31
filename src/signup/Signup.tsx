import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // type usersType = { mobileNo: number; mPin: number };
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

  // const signUpHandler = (e: any) => {
  //   e.preventDefault();

  //   const mobileNo: number = e.target.mobileNo.value;
  //   const newMPin: number = e.target.mpin.value;
  //   const confirmMpin: number = e.target.confirmMPin.value;

  //   const userData = { mobileNo, mPin: newMPin };

  //   const previousData: usersType[] = JSON.parse(
  //     localStorage.getItem("users") || "[]");

  //   console.log("userData", previousData);
  //   console.log("userData", { mobileNo, newMPin });
  //   if (previousData.length > 0 && mobileNo) {
  //     const mappedUser = previousData.map((user) => {
  //       if (user.mobileNo === mobileNo) {
  //         return "user";
  //       }
  //       return "no user";
  //     });

  //     if (newMPin === confirmMpin) {
  //       if (mappedUser.includes("user")) {
  //         alert("user already exist");
  //       } else if (mappedUser.includes("no user")) {
  //         previousData.push(userData);
  //         sessionStorage.setItem("signUpSuccess", "true");
  //         navigate("/");

  //         localStorage.setItem(JSON.stringify(mobileNo), "[]");
  //         window.location.reload();
  //       }
  //     } else {
  //       alert("mPin does not match");
  //     }

  //     console.log("pre", previousData);
  //     localStorage.setItem("users", JSON.stringify(previousData));
  //   } else if ((previousData.length = 0 && mobileNo)) {
  //   }
  // };
  const navigate = useNavigate();
  const [togglePin, setTogglePin] = useState<Boolean>(false);
  const onToggleChange = () => {
    setTogglePin(!togglePin);
  };

  const [toggleMPin, setToggleMPin] = useState<Boolean>(false);
  const onToggleMPinChange = () => {
    setToggleMPin(!toggleMPin);
  };

  const storeUsers = localStorage.getItem("users") || "[]";
  //   if (storeUsers === "[]") {
  //   localStorage.setItem(
  //     "users",
  //     JSON.stringify([{ mobile: "2345678909", pin: "1111", mPin: "1111" }])
  //   );
  //   }

  console.log("storeUsers", storeUsers);

  const signUpHandler = (event: any) => {
    event.preventDefault();

    const mobile = event.target.mobile.value;
    const pin = event.target.pin.value;
    const mPin = event.target.mPin.value;

    const userData = {
      mobile,
      pin,
      mPin,
    };

    const previousData = JSON.parse(localStorage.getItem("users") || "[]");

    const arr: any[] = [];

    previousData.map((user: any) => {
      if (userData.mobile === user.mobile) {
        arr.push("exist");
      }
    });

    if (arr.includes("exist")) {
      alert("user already exist");
    } else {
      if (mobile === "" && pin === "" && mPin === "") {
        alert("enter all fields");
      } else {
        if (pin === mPin) {
          previousData.push(userData);
          localStorage.setItem("users", JSON.stringify(previousData));
          localStorage.setItem(JSON.stringify(mobile), JSON.stringify([]));
          navigate("/");
        } else {
          alert("enter same pins");
        }
      }
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
                name="mobile"
                // id="mobi
                required
                minLength={10}
                maxLength={10}
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="mpin">
              {/* <Input placeholder="Enter 4 Digit MPin"/> */}
              <input
                className="input-box"
                name="pin"
                // id="mobile"
                // type="text"
                required
                type={togglePin ? "text" : "password"}
                placeholder="Enter 4 Digit MPin"
                minLength={4}
                maxLength={4}
              />
               <div className="eye">
                <img
                  src="/images/eye_on.png"
                  alt="eye"
                  // onClick={togglePassword}
                  onClick={onToggleChange}
                />
              </div>
            </div>
            <div className="mpin">
              {/* <Input placeholder="Re-Enter 4 Digit MPin"/> */}
              <input
                className="input-box"
                name="mPin"
                // id="mPin"
                // type="text"
                type={togglePin ? "text" : "password"}
                placeholder="Re-Enter 4 Digit MPin"
                minLength={4}
                maxLength={4}
              />
              <div className="eye">
                <img
                  src="/images/eye_on.png"
                  alt="eye"
                  // onClick={togglePassword}
                  // onClick={onToggleMPinChange}
                  onClick={onToggleChange}
                />
              </div>
            </div>
            {/* <Button value="SIGN UP" /> */}
            <div className="signinbtn">
              <input type="submit" value="SIGN UP" className="signup-btn-txt" />
            </div>
            {/* <button className="signinbtn signup-btn-txt"></button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
