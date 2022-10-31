import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import '../../Pages/media.css'
import copy from "copy-to-clipboard"
const CopyPassword = (props:any) => {
  function copypassword(password: any){
    copy(password)
  }
  return (
    <div>
         <div onClick={()=>{
          copypassword(props.sendpass)
         ;
         }} className='copy'>
            <img src="/images/copy.png" alt="copy" className='copy-Icon' />
            <p className='copy-Text'>Copy Password</p>
        </div>
    </div>
  )
}

export default CopyPassword
