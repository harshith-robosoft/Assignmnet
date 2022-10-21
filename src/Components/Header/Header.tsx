import React, { useState } from 'react'
import "../../Pages/Pages.css"
const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event: any) => {
      setIsShown((current: any) => !current);
    };
  return (
    <div className='topMenu-1-outer'>
        <div className="topMenu-1">
          <div className='pass-man'>
            <img src="images/PASS MANAGER.png" alt="pic" />
          </div>
            <div className="logo-box">
              <img src="images/pass_logo.png" alt="pic" />
            </div>
            <div className='logo-box-r'>
            <div className="logo-l">
              <img src="images/sync.png" alt="pic" />
            </div>
            <div className="logo-r">
              <img  src="images/profile.png" alt="pic" onClick={handleClick} />
              <div className='log-out' ></div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Header
