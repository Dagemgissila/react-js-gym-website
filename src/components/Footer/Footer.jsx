import React from 'react';
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedlin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
        <hr />
           <div className='footer'>
              <img src={Github} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedlin} alt="" />
           </div>

           <div className='logo-f'>
             <img src={Logo} alt="" />
           </div>
    </div>
  )
}

export default Footer