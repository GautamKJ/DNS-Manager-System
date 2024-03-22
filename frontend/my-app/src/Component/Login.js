import React, { useState } from 'react'
import {Link} from "react-router-dom";
import Navbar from "../Component/Navbar"

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Login = () => {

  

  const [showbtn,updateshowbtn]=useState("far fa-eye");
  const [type,updatetype]=useState("password");
  const [credentials,setcredentials]=useState({email:"",password:""});

const showPassword=()=>{


  if(type==='password'){
      updatetype("text");
      updateshowbtn("far fa-eye-slash");
  }
  
  else{
  updatetype("password");

  updateshowbtn("far fa-eye");
  }

}

const setDetail=(e)=>{
  setcredentials({...credentials,[e.target.name]:e.target.value});
}

const onsubmit= async(e)=>{
  e.preventDefault();
  
  
  
  
  }
  document.title = "LogIn";
 
  
  return (  
    <>
  <Navbar/>
        <div className="container">
        <div className="header">
        <div className='text'>Login</div>
        <div className='underline'></div>

        </div>
        <form className='inputs'>
        
        <div className='input'>
            <img src={email_icon}/>
            <input type="email" placeholder="Email" name="name" onChange={setDetail} />
        </div>   
          
        <div className='input'>
            <img src={password_icon}/>
            <input type="password" placeholder="Password" name="name" onChange={setDetail} />
        </div>   
        <span>Not Register?<Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link></span>
        <div className='submit-container'>
            <div className='submit'>Login</div>
            
        </div>
        </form>

            </div>
              
    </>
  )
}


export default Login;