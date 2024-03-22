import React, { useState } from 'react'
import {Link} from "react-router-dom";
import Navbar from "../Component/Navbar"
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Signup = () => {    
    
    const [showbtn,updateshowbtn]=useState("far fa-eye");
    const [type,updatetype]=useState("password");

    const [credentials,setcredentials]=useState({name:"",email:"",password:""});
    

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
   
        setcredentials({name:"",email:"",password:""});
    }
    
      
    




    

  return (
    <>
    <Navbar/>
        <div className="container">
        <div className="header">
        <div className='text'>Sign Up</div>
        <div className='underline'></div>

        </div>
        <form className='inputs'>
        <div className='input'>
            <img src={user_icon}/>
            <input type="text" placeholder="Name" name="name" onChange={setDetail} />
        </div>  
        <div className='input'>
            <img src={email_icon}/>
            <input type="email" placeholder="Email" name="name" onChange={setDetail} />
        </div>   
          
        <div className='input'>
            <img src={password_icon}/>
            <input type="password" placeholder="Password" name="name" onChange={setDetail} />
        </div>   
        <span> Already Register?<Link to="/login" style={{ textDecoration: "none" }}>Login</Link></span>
        <div className='submit-container'>
            <div className='submit'>Signup</div>
            
        </div>
        </form>

            </div>
                  



</>
  )
}






export default Signup;