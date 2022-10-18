import React from 'react'
import "../../Pages/Pages.css"
const SideBar = () => {
  return (
    <div>
        <div className="sideMenu">
          <img
            src="images/burger_menu.png"
            alt="pic"
            className="burger-menu-box"
          />
          <div className="hme-bar">
            <img className="home-icn" src="images/home_icn.png" alt="pic" />
          </div>
        </div>
    </div>
  )
}

export default SideBar
