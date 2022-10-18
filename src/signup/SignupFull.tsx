import React from 'react'
import Logo from '../Components/logo/logo'
import Signin from '../signin/Signin'
import Signup from './Signup'

const SignupFull = () => {
  return (
    <div>
      <div className="signInContainer">
      <div className="sign-body">
        <Logo />
      </div>
      {/* <div className="seperate"></div> */}
      <div className="signContainer">
        <Signup />
      </div>
      
    </div>
    </div>
  )
}

export default SignupFull
