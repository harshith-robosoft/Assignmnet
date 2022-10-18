import React from 'react'
import '../App.css'
import Input from '../Components/input/Input'
import Button from '../Components/button/Button'
import { Link } from "react-router-dom";
import Logo from '../Components/logo/logo';

const Signin = () => {
  return (
    <div className='sign-body'>
   <div className='loginBackground-part-r'>
      <div className="loginRight">
        <span className="loginhead">SIGN IN TO YOUR ACCOUNT</span>
        <div className="mobile">
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
          <span className="dont-account">Don’t have a Account? <Link to="/signup">SIGNUP</Link></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signin
