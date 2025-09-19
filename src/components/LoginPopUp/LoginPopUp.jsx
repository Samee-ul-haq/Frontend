import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

function LoginPopUp({setShowLogin}) {

    const [currState,setCurrState] = useState("Sign up")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false) } src={assets.cross_icon}/>
        </div>
        <div className='login-popup-inputs' >
            {currState === "Login" ? <></> : <input type='text' placeholder='Your name' required ></input>}
            <input type='email' placeholder='Your Email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button> {currState === "Sign Up"? "Create Account" : "Login"} </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p> By continuing, I agree to terms of use & privacy policy </p>
        </div>
        {currState == "Login" 
        ? <p> Create  new Account? <span onClick={()=> setCurrState("Sign Up")} >Click Here</span></p>
        : <p> Already have an Acoount? <span onClick={()=> setCurrState("Login")} >Login Here</span></p>
    }
      </form>
    </div>
  )
}

export default LoginPopUp
