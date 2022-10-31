import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/sidebar/SideBar";
import HomePage from "./HomePage";
import "./Pages.css";
import "./media.css";
import "./moadal1.css";
import SiteContainer from "../Components/siteContainer/SiteContainer";
import Modal from "../Components/Modal/Modal";
import { Link } from "react-router-dom";
import Modal2 from "../Components/Modal/Modal2";
import { visitFunctionBody } from "typescript";
import Modal3 from "../Components/Modal/Modal3";

const HomePgdata = () => {
  const [current, setCurrent] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [search, setSearch] = useState("");
  const handleClick = (event: any) => {
    setIsShown((current: any) => !current);

    console.log(event);
  };
  const [detailsShown, setDetailsShown] = useState(false);

  function showSiteDetails() {
    setDetailsShown(true);
  }
  function hideSiteDetails() {
    setDetailsShown(false);
  }

  const [editShown, setEditShown] = useState(false);
  function showEditDetails() {
    setEditShown(true);
  }
  function hideEditDetails() {
    setEditShown(false);
  }

  const [count, setCount] = useState(0);

  useEffect(() =>
    setCount(document.getElementsByClassName("site-Container").length)
  );
  
  const getTerm = (e: any) => {
    setSearch(e.target.value);
  };

  const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const siteData = JSON.parse(localStorage.getItem(displayData) || "[]");

  function index(index:any){
setCurrent(index);
  }

  return (
    <div>
      <div className="outerbody">
        <SideBar />
        <div className="r-mainpage">
          <Header />
          <Modal isShown={isShown} handleClick={handleClick} />
          <Modal2
            isShown={detailsShown}
            handleClick={showSiteDetails}
            closeClick={hideSiteDetails}
            handleEditClick={showEditDetails }
            closeEditClick={hideEditDetails}
            current={current}
          />
          <Modal3 isShown={editShown} handleClick={showEditDetails} closeClick={hideEditDetails}  current={current}/>
          <div className="r-btm-mainpage">
            <div className="topMenu-2mob">
              <h1 className="sitesmob">Sites</h1>
              <div className="socialmob">
                <p className="social-media">Social Media</p>

                <div className="social-num">{count}</div>

                <div className="arrow-img">
                  <img src="/images/Path Copy.png" alt="" />
                </div>
              </div>
            </div>
            <div
                className="search-icn-mob"
               
              >
                <div style={{ display: "flex" }}>
                  <input className="search" placeholder="Search"   name="search"
                onChange={getTerm} ></input>
                  <div className="search-icon-div">           
                      <img src="images/search.png" alt="pic" />
                  </div>
                </div>
                <div className="search-bottom"></div>
              </div>

            <div className="topMenu-2">
              <h1 className="sites">Sites</h1>

              <div
                className="search-icn"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex" }}>
                  <input className="search" placeholder="Search"   name="search"
                onChange={getTerm} ></input>
                  <div className="search-icon-div">           
                      <img src="images/search.png" alt="pic" />
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

            {/* 
    ***************
    using media.css from here 
   ******************
    */}

            <div className="social">
              <p className="social-media">Social Media</p>

              <div className="social-num">{count}</div>
              <div className="arrow-img">
                <img src="/images/Path Copy.png" alt="" />
              </div>
            </div>

            {JSON.stringify(siteData) === "[]" ? (
              <HomePage />
              
            ) : (
              <div className="grid-whole-shell">
                <SiteContainer
                  appIcon="Facebook"
                  // image={`https://app.outboundsales.io/api/logo/${user.siteName}.com`}
                  isShown={detailsShown}
                  handleClick={showSiteDetails}
                  closeClick={hideSiteDetails}
                  search={search}

                  index={index}
                />
                   <div className="add-btn-mob">
                <img
                  className="add-btn-img"
                  src="/images/add_btn.png"
                  alt="pic"
                  onClick={handleClick}
                />
              </div>
              </div>
              // <div className="grid-whole-shell">
              //   <div className="grid-Flex">
              //     <div className="grid-box" >
              //     <SiteContainer
              //       appIcon="Facebook"
              //       image="/images/facebook.png"
              //     />

              //     {/* <SiteContainer
              //       appIcon="Youtube"
              //       image="/images/YouTube.png"
              //     />
              //     <SiteContainer
              //       appIcon="Twitter"
              //       image="/images/Twitter.png"
              //     />
              //     <SiteContainer
              //       appIcon="Pinterest"
              //       image="/images/Pinterest.png"
              //     />
              //     <SiteContainer appIcon="Gmail" image="/images/Gmail.png" />
              //     <SiteContainer
              //       appIcon="Linkedin"
              //       image="/images/LinkdIn.png"
              //     /> */}
              //     </div>
              //   </div>
              // </div>
            )}

            {/* <div className="grid-whole-shell">
              <div className="grid-Flex">
                <SiteContainer
                  appIcon="Facebook"
                  image="/images/facebook.png"
                />
                <SiteContainer appIcon="Youtube" image="/images/YouTube.png" />
                <SiteContainer appIcon="Twitter" image="/images/Twitter.png" />
                <SiteContainer
                  appIcon="Pinterest"
                  image="/images/Pinterest.png"
                />
                <SiteContainer appIcon="Gmail" image="/images/Gmail.png" />
                <SiteContainer appIcon="Linkedin" image="/images/LinkdIn.png" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePgdata;
