import React from 'react'
import "../../Pages/Pages.css"
const Header = () => {
  return (
    <div>
        <div className="topMenu-1">
            <div className="logo-box">
              <img src="images/pass_logo.png" alt="pic" />
            </div>
            <div className="logo-l">
              <img className="syn-img" src="images/sync.png" alt="pic" />
            </div>
            <div className="logo-r">
              <img className="prfile-img" src="images/profile.png" alt="pic" />
            </div>
          </div>
    </div>
  )
}

export default Header
