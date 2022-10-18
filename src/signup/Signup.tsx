import React from 'react'
import '../App.css'
import Input from '../Components/input/Input'
import Button from '../Components/button/Button'
const Signup = () => {
  return (
    <div>
       <div className="loginRight">
        <span className="loginhead">SIGN UP</span>
        <div className="mobile">
          <Input placeholder="Enter Mobile Number"/>
        </div>
        <div className='mpin'>
            <Input placeholder="Enter 4 Digit MPin"/>
        </div>
        <div className="mpin">
          <Input placeholder="Re-Enter 4 Digit MPin"/>
          <div className="eye">
            <img src="/images/eye_on.png" alt="" />
          </div>
        </div>
          <Button value="SIGN UP" />
      </div>
    </div>
  )
}

export default Signup
