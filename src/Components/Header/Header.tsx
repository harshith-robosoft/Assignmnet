import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Pages/Pages.css";
const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event: any) => {
    setIsShown((current: any) => !current);
  };
  return (
    <>
      <div className="logo-box-rmob">
        <div className="pass-man">
          <img src="images/PASS MANAGER.png" alt="pic" />
        </div>
        <div className="threeicon-r">
          <img className="search-mob" src="images/searchmob.png" alt="pic" />
          <img className="search-mob1" src="images/sync_icnmob.png" alt="pic" />
          <div className="dropdown">
          <img className="search-mob2" src="images/profilemob.png" alt="pic" />
          <div className="dropdown-content">
                  <div className="change-pass">
                    <p>Change Password</p>
                    <img src="images/lock.png" alt="lock" />
                  </div>
                  
                  <div className="sign-out">
                    <p>Sign Out</p>
                    <Link to="/"> <img src="images/logout.png" alt="lock" /></Link>
                  </div>
              
                </div>
                </div>
        </div>
      </div>
      <div className="topMenu-1-outer">
        <div className="topMenu-1">
          <div className="logo-box">
            <img src="images/pass_logo.png" alt="pic" />
          </div>
          <div className="logo-box-r">
            <div>
              <img src="images/sync.png" alt="pic" />
            </div>
            <div>
              {/* <img src="images/profile.png" alt="pic"  /> */}
              {/* <div className='log-out' ></div> */}
              <div className="dropdown">
                {/* <img src="images/profilemob.png" alt="icon" /> */}
                <img src="images/profile.png" alt="pic" />
                <div className="dropdown-content">
                  <div className="change-pass">
                    <p>Change Password</p>
                    <img src="images/lock.png" alt="lock" />
                  </div>
                  
                  <div className="sign-out">
                    <p>Sign Out</p>
                    <Link to="/"> <img src="images/logout.png" alt="lock" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
