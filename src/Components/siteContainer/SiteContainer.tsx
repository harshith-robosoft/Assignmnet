import React, { useState } from "react";
import "../../Pages/media.css";
import CopyPassword from "../copyPassword/CopyPassword";
import Modal from "../Modal/Modal";
import Modal2 from "../Modal/Modal2";

const SiteContainer = (props: any) => {
  const[current,setCurrent]= useState(0)
  const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");

  const siteData = JSON.parse(localStorage.getItem(displayData) || "[]");
  // const [isShown, setIsShown] = useState(false);
  // const handleClick = (event: any) => {
  //   setIsShown((current: any) => !current);
  // };

  props.index(current)

  console.log(props);
  return (
    <>
    {/* <Modal2 isShown={isShown} handleClick={handleClick} /> */}
    <div className="grid-1">
      {siteData
        .filter((ele: any) => {
          return props.search.toLowerCase() === ""
            ? ele
            : ele.siteName.toLowerCase().includes(props.search.toLowerCase());
        }).map((user: any,index:any) => {
        return (
          <div className="site-Container">
            <div className="site-Head">
              {/* <img src={`/appIcons/${props.appIcon}Icon.png`} alt="icon" className='site-Icon' /> */}
              <img src={`https://app.outboundsales.io/api/logo/${user.siteName}.com`}alt="icon" className="site-Icon" />
              <div className="site-Details">
                <p className="site-Name"  onClick={()=>{props.handleClick(index);
                setCurrent(index)}}>{user.siteName}</p>
                <CopyPassword sendpass={user.sitePassword}/>
              </div>
            </div>
            <div className="site-Link">www.{user.url}.com</div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default SiteContainer;
