import React from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/sidebar/SideBar";
import "./Pages.css";
import "./media.css"
const HomePage = () => {
  return (
    <div>
      <div className="outerbody">  
        <SideBar/>
        <div className="r-mainpage">
           <Header/>

          <div className="r-btm-mainpage">
            <div className="topMenu-2">
              <h1 className="sites">Sites</h1>
           
              <div
                className="search-icn"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex" }}>
                  <input className="search" placeholder="Search"></input>
                  <div className="search-icon-div">
                    <img src="images/search.png" alt="" />
                  </div>
                </div>
                <div className="search-bottom"></div>
              </div>
              <div className="add-btn">
                <img
                  className="add-btn-img"
                  src="/images/add_btn.png"
                  alt="pic"
                />
              </div>
            </div>
            {/* <div className="add-site">
              <p className="please-click-on-the">
                Please Click on the “+” symbol to add sites
              </p>
            </div> */}

    {/* 
    ***************
    using media.css from here 
   ******************
    */}

    
            <div className="social" >
                <p className="social-media">Social Media</p>
                <div className="social-num"></div>
            </div>
<div className="grid-whole-shell">
      <div className="grid-Flex">
      <div className="site-Container">
      <div className='site-Head'>
                <img src="/images/facebook.png" alt="icon" className='siteIcon' />
                <div className='site-Details'>
                    <p className='site-Name'>afaf</p>
                    gfss
                </div>
            </div>
            <div className='site-Link'>
            www..com
            </div>
        
      </div>
      <div className="site-Container">2</div>
      <div className="site-Container">3</div>
      <div className="site-Container">4</div>
      <div className="site-Container">5</div>
      <div className="site-Container">6</div>
      </div>
      </div>
hello

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
