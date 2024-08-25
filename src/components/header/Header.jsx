import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'
import {useTypewriter } from 'react-simple-typewriter'

const Header = () => {
  const [text]= useTypewriter({
    words: ["Software Engineering undergraduate.","Professional Coder.","Full Stack Developer.", "Mobile Application Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed:10,
    delaySpeed: 2000, 
})
  return (
    <header>
      <div className="container header__container">
        <h2>Hello!, I'm</h2>
        <h1>Himan Welgama</h1>
        <h3 className="text-light">a <span>{text}</span></h3>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="myimage" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

