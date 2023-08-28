import React from 'react'
import "./register.css"
export default function Register() {
  return (
    <div className='login'>
          <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>TrendWave </h3>
                    <span className='loginDesc'/>
                        connect with friends and world arround on TrendWave.
         
          </div>
          <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='UserName'  className='loginInput'/>
            <input placeholder='Email'  className='loginInput'/>
            <input placeholder='Password'  className='loginInput'/>
         
            <input placeholder='Password Again'  className='loginInput'/>
            <button className='loginButton'>Sign Up</button>
       
            <button  className='loginRegisterButton'>
             Log into Account
            </button>

            </div>
          </div>
          </div>
       </div>
  )
}
