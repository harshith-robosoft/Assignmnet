import React, { useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/sidebar/SideBar";
import "./Pages.css";
import "./media.css";
import "./moadal1.css"
import SiteContainer from "../Components/siteContainer/SiteContainer";
import Modal from "../Components/Modal/Modal";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event: any) => {
        setIsShown((current: any) => !current);
      };
   
  return ( 
    <div>
      
        
           
            <div className="adds-site">
              <p className="please-click-on-the">
                Please Click on the “+” symbol to add sites
              </p>
            </div>
          
    </div>
  );
};


export default HomePage;
