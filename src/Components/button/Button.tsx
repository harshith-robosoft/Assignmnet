import React from 'react'
import './Button.css'
const Button = (props:any) => {
  return (
    <div>
      <button className="signinbtn">
            <text className="signin-btn-txt">{props.value}</text>
      </button>
    </div>
  )
}

export default Button
