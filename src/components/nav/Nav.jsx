import React from 'react'
import './nav.css'
import { CiHome, CiUser } from "react-icons/ci";
import { LiaAddressBookSolid } from "react-icons/lia";
import { FaRegHandshake } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { GrInfo } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CiHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LiaAddressBookSolid/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaRegHandshake/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrInfo/></a>
      <a href="#testimonial" onClick={()=> setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><MdFeedback/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>
      
      
    </nav>
  
  )
}

export default Nav