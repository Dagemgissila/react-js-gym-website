import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from "../../assets/bars.png"
import { useState } from 'react';
import {Link} from "react-scroll";
const Header = () => {
  const mobile=window.innerWidth<=768 ? true :false;
  const [menu,setMenu]=useState(false);
  return (
    <div className="header">
        <img className='logo' src={Logo} alt='logo'/>
        {(menu===false  && mobile ===true) ?  
         ( <div>
            <img style={{width:'1.5rem' ,height :'1.5rem'}} onClick={()=>setMenu(true)} src={Bars} alt="" />
          </div>) :  <ul className='header-menu'>
          <li onClick={()=>setMenu(false)}>
              <Link onClick={()=>setMenu(false)}
              to='home'
              span={true}
              smooth={true}>
              Home</Link>
              </li>
            <li onClick={()=>setMenu(false)}>
              <Link onClick={()=>setMenu(false)}
              to='program'
              span={true}
              smooth={true}>
              Program</Link>
              </li>
            <li onClick={()=>setMenu(false)}>
              <Link onClick={()=>setMenu(false)}
              to='whyus'
              span={true}
              smooth={true}>
              Why Us</Link>
              </li>
            <li onClick={()=>setMenu(false)}>
              <Link onClick={()=>setMenu(false)}
              to='plans'
              span={true}
              smooth={true}>
              Plans</Link>
              </li>
            <li onClick={()=>setMenu(false)}>
              <Link onClick={()=>setMenu(false)}
              to='testimonials'
              span={true}
              smooth={true}>
              Testimonies</Link>
              </li>
        </ul>
         }
       
    </div>
  )
}

export default Header