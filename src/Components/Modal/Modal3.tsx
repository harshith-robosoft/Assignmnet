import React from "react";
import { useState } from "react";

export default function Modal(props: any) {
  const [eye, setEye] = useState("password");

  function handleEye() {
    setEye("text");
    setTimeout(() => {
      setEye("password");
    }, 1000);
  }
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const oldData = JSON.parse(localStorage.getItem(currentUser) || "[]");
  const modalhandle = (e:any) => {
     e.preventDefault();
     const url = e.target.url.value;
    const siteName = e.target.siteName.value;
    const folder = e.target.folder.value;
    const userName = e.target.userName.value;
    const sitePassword = e.target.sitePassword.value;
    const notes = e.target.notes.value; 

    const modalData = {
      url,
      siteName,
      folder,
      userName,
      sitePassword,
      notes,
    };

    console.log(modalData);

    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const displayData = JSON.parse(localStorage.getItem(currentUser) || "[]");
    console.log("displayData", displayData);
    const oldData = JSON.parse(localStorage.getItem(currentUser) || "[]");
    oldData[props.current]=modalData;
    localStorage.setItem(currentUser, JSON.stringify(oldData));
    console.log(oldData)
  }

  return (
    <div>
      <div
        id="myModal"
        className="modal"
        style={{ display: props.isShown ? "block" : "none" }}
      >
        <div className="modal-content">
          <form action="" onSubmit={modalhandle}>
            <div className="popup">
              <div className="mobile-top-bar">
                <i className="fa-solid fa-arrow-left back-arrow" onClick={props.handleClick}></i>
              </div>
              <span className="add-site ">Edit</span>
              <div className="group-9">
                <span className="urltext">URL</span>
                <input className="urlvalue" required type="text" name="url"/>
              </div>
              <div className="group-8">
                <div className="sitebox">
                  <span className="site-name">Site Name</span>
                  <input type="text" required className="site-value" name="siteName" />
                </div>
                <div className="sectorbox">
                  <span className="sector-name">Sector/Folder</span>
                  <div style={{ display: "flex" }} className="sector-value">
                    <input
                      type="text"
                      style={{ width: "307.5px", backgroundColor: "#F5F7FB" }}
                      name="folder"
                    ></input>
                    <img
                      src="/images/Path Copy.png"
                      alt=""
                      style={{
                        height: "8.93px",
                        width: "14px",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="group-7">
                <div className="namebox">
                  <span className="username-name">User Name</span>
                  <input type="text" className="username-value" name="userName" />
                </div>
                <div className="passwordbox">
                  <span className="Password-name">Site Password</span>
                  <div style={{ display: "flex" }} className="Password-value">
                    <input
                      type={eye}
                      style={{ width: "307.5px", backgroundColor: "#F5F7FB" }}
                      name="sitePassword"
                      required
                    />
                    <img
                      src="./images/eye_on.png"
                      alt=""
                      style={{ height: "20px", marginTop: "5px" }}
                      onClick={() => {
                        handleEye();
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="group-6">
                <span className="notestext">NOTES</span>
                <input className="notesvalue" type="text" name="notes" />
              </div>
              <div
                className="button-box"
              >
                <button
                  className="update"
                  name="submit"
                  value="submit"
                  // onClick={props.modalhandle}
                  
                >
                  <span className="save" >Update</span>
                </button>
              </div>
            </div>
          </form>

          <div className="close-btn" onClick={props.closeClick}>
            <img src="/images/close_btn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
   
  );
}
