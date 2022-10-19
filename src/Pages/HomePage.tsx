import React, { useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/sidebar/SideBar";
import "./Pages.css";
import "./media.css";
import "./moadal1.css"
import SiteContainer from "../Components/siteContainer/SiteContainer";
import Modal from "../Components/Modal/Modal";
const HomePage = () => {
    // const [modal, setModal] = useState(false)
    // const toggleModal =()=>{
    //   setModal(!modal)

    const [isShown, setIsShown] = useState(false);
    const handleClick = (event: any) => {
        setIsShown((current: any) => !current);
      };
   
  return (
    <div>
      <div className="outerbody">
        <SideBar />
        <div className="r-mainpage">
          <Header />
          <Modal isShown={isShown} handleClick={handleClick} />
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
                  onClick={handleClick}
                />
              </div>
            </div>
           
            <div className="adds-site">
              <p className="please-click-on-the">
                Please Click on the “+” symbol to add sites
              </p>
            </div>




            {/* 
    ***************
    using media.css from here 
   ******************
    */}

            {/* <div className="social">
              <p className="social-media">Social Media</p>

              <div className="social-num">7</div>
              <div className="arrow-img">
                <img src="/images/Path Copy.png" alt="" />
              </div>
            </div>

            <div className="grid-whole-shell">
              <div className="grid-Flex">
                <SiteContainer
                  appIcon="facebook"
                  image="/images/facebook.png"
                />
                <SiteContainer appIcon="youtube" />
                <SiteContainer appIcon="pinterest" />
                <SiteContainer appIcon="gmail" />
                <SiteContainer appIcon="linkedin" />
                <SiteContainer />
               
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
