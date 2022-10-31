import React from 'react'
import './Input.css'
const Input = (props:any) => {
  return (
    <div>
      <input
            className="input-box "
            type="text"
            placeholder={props.placeholder}
          />
    </div>
  )
}

export default Input

