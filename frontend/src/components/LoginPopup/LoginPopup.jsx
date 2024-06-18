import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const[curState,setCurState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{curState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
         <div className="login-popup-inputs">
         {curState==="Login"?<></>: 
          <input type="text" placeholder='Your name' required />}
          
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='PassWord' required />

         </div>

         <button>{curState==="Sign Up"?"Create Acount":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>

            {curState==="Login"?
            <p >Create a new account?<span onClick={()=>setCurState("Sign Up")}>Click here!</span></p>
            :<p>Already have an account?<span onClick={()=>setCurState("Login")}>Login here!</span></p>}
            

      </form>
    </div>
  )
}

export default LoginPopup
