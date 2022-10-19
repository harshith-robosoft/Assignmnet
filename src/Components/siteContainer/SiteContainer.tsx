import React from 'react'
import '../../Pages/media.css'
import CopyPassword from '../copyPassword/CopyPassword'

const SiteContainer = (props:any) => {
  return (
    <div>
      <div className='site-Container'>
            <div className='site-Head'>
                {/* <img src={`/appIcons/${props.appIcon}Icon.png`} alt="icon" className='site-Icon' /> */}
                <img
                    src={props.image}
                      alt="icon"
                      className="site-Icon"
                    />
                <div className='site-Details'>
                    <p className='site-Name'>{props.appIcon}</p>
                      <CopyPassword/>
                </div>
            </div>
            <div className='site-Link'>
            www.{props.appIcon}.com
            </div>
        </div>
    </div>
  )
}

export default SiteContainer
