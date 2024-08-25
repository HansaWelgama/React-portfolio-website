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
            As a highly motivated undergraduate in software engineering, 
            a deep passion for exploring and mastering cutting-edge technologies is held. 
            Opportunities to apply growing expertise to real-world projects are eagerly sought, 
            with a desire to collaborate with innovative teams to develop impactful solutions. 
            A strong foundation in both technical and interpersonal skills has been developed, 
            driving a commitment to contribute meaningfully to the tech industry. Continuous learning, 
            growth, and making a positive difference are pursued with dedication.


        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About