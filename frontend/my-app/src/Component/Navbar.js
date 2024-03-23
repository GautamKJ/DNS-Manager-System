import React from 'react'

import {Link} from "react-router-dom";
import icon from '../Assets/domain_manger_icon.png';

const Navbar = () => {
  return (
    <>
    

<div className='nav_container'>
    <div className='icon'>
    <img src={icon} width={50} height={50}></img>
      <h3 className='title'>DNS Manager</h3>
      </div>
     <ul className='links'>
     <li><Link to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link></li>
     <li><Link to="/add-domain" style={{ textDecoration: "none" }}>Add Domain</Link></li>
     </ul>

     <ul className='links'>
     <li><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></li>
     <li><Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link></li>
        
        
     </ul>
    </div>
      
    </>
  )
}

export default Navbar
