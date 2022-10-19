<div className="home-bar" >
            
<div className="hme-rect-bar"></div>
<img className="home-icn" src="images/home_icn.png" alt="pic" />
<div className="hme-oval-bar"></div>

</div>





.hme-rect-bar {
    height: 80px;
    width: 7px;
    border-radius: 3px;
    background-color: #FFA043;
    margin-top: 40px;
  }
  .hme-oval-bar {
    height: 17px;
    width: 17px;
    background-color: #FFA043;
  }
  .home-bar{
    display: flex;
  }


  .app {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign-body {
    flex-basis: 30%;
    height: 481px;
  
    border-radius: 15px;
    background: linear-gradient(180deg, #20bbff 0%, #0e85ff 100%);
    box-shadow: 0 8px 18px 10px rgba(0, 0, 0, 0.02);
    display: flex;
  }
  .signContainer {
    flex-basis: 70%;
  }
  
  .signInContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  <div className="signInContainer">
  <div className="sign-body">
    <Logo />
  </div>
  {/* <div className="seperate"></div> */}
  <div className="signContainer">
    <Signin />
  </div>
  
</div>





       {/* {
                modal &&
                <div className='overlaymodal'>
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <h2>Add Site</h2>
                        <div className="url-box">
                            <p className="modal-text" >URL</p>
                         <div className="url-input" >
                             <input type="text"className="url-input" />
                         </div>
                        </div>
                        
                        <div className="site-sect-ibox" >
                        <div className="url-box">
                            <p className="modal-text" >URL</p>
                         <div className="site-input" >
                             <input type="text"className="urlinput" />
                         </div>
                        </div>
                        <div className="url-box">
                            <p className="modal-text" >URL</p>
                         <div className="site-input" >
                             <input type="text"className="urlinput" />
                         </div>
                        </div>
                        </div>

                      <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                      </button>
                    </div>
                  </div>
                  </div>
              } */}
