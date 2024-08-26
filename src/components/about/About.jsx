import React from 'react'
import './about.css'
import ME from '../../assets/myAbout.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={ME} alt="About image" />
          </div>
        </div>
        
        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          < FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
          </article>

          <article className="about__card">
          <FaUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
          </article>

          <article className="about__card">
          < GrProjects className='about__icon'/>
          <h5>Projects</h5>
          <small>10+ Completed</small>
          </article>
        </div>
        <p>
        Motivated undergraduate in software engineering with a passion for cutting-edge technologies. Eager to
        apply my knowledge to real-world projects and collaborate with innovative teams. Strong interpersonal
        skills and a drive to make a meaningful impact in the tech industry.
        </p>
     
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

       
        </div>
      </div>
    </section>
  )
}

export default About