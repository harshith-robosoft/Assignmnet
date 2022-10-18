import React from 'react'
import '../App.css'
import Input from '../Components/input/Input'
import Button from '../Components/button/Button'

const Signin = () => {
  return (
    <div>
      <div className="loginRight">
        <span className="loginhead">SIGN IN TO YOUR ACCOUNT</span>
        <div className="mobile">
          {/* <input
            className="input-box "
            type="text"
            placeholder="Mobile Number"
          /> */}
          <Input placeholder="Mobile Number"/>
        </div>
        <div className="mpin">
          {/* <input className="input-box" type="text" placeholder="Mpin" /> */}
          <Input placeholder="MPin"/>
          <div className="eye">
            <img src="/images/eye_on.png" alt="" />
          </div>
        </div>
        <div className="loginRightBtm">
          <span className="f-password">Forgot your password?</span>
          {/* <button className="signinbtn">
            <text className="signin-btn-txt">SIGN IN</text>
          </button> */}
          <Button value="SIGN IN" />
          <span className="dont-account">Don’t have a Account? SIGNUP</span>
        </div>
      </div>
    </div>
  )
}

export default Signin
