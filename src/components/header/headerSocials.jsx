import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook  } from "react-icons/bs";


const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/himan-welgama-864286290" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/HansaWelgama" target='_blank'><BsGithub/></a>
        <a href="https://www.facebook.com/hansa.himan?mibextid=LQQJ4d" target='_blank'><BsFacebook /></a>
    </div>
  )
}

export default headerSocials