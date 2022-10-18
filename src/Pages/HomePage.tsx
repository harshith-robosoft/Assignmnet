import React from "react";
import "./Pages.css";
const HomePage = () => {
  return (
    <div>
      <div className="outerbody">
        <div className="sideMenu">
          <div className="burger-menu-box">
            <img src="images/burger_menu.png" alt="pic" />
          </div>
        </div>
        <div className="topMenu-1">
          <div className="logo-box">
            <img className="logo-size" src="images/logo.png" alt="pic" />
            <div className="logo-text">PASS MANAGER</div>
          </div>
       <div className="logo-l">
        <img src="images/sync_icn.png" alt="pic" />
       </div>
       <div className="logo-r">
        <img src="images/profile.png" alt="pic" />
       </div>


        </div>
      </div>
    </div>
  );
};

export default HomePage;
