import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaHtml5,FaCss3,FaSass,FaAngular,FaJava,FaNodeJs,FaPython,FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress,SiMysql,SiMongodb } from "react-icons/si";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I Have?</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__Details'>
                <FaHtml5 className='experience__Details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>   
            </article>
            <article className='experience__Details'>
                <FaCss3 className='experience__Details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>   
            </article>
            <article className='experience__Details'>
                <FaSass className='experience__Details-icon'/>
                <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
                </div>  
            </article>
            <article className='experience__Details'>
                <IoLogoJavascript className='experience__Details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>   
            </article>
            <article className='experience__Details'>
                <RiReactjsLine className='experience__Details-icon'/>
                <div>
                <h4>ReactJs</h4>
                <small className='text-light'>intermediate</small>
                </div>
            </article>
            <article className='experience__Details'>
                <TbBrandReactNative className='experience__Details-icon'/>
                <div>
                <h4>React Native</h4>
                <small className='text-light'>Experienced</small>
                </div>   
            </article>
            <article className='experience__Details'>
                <FaAngular className='experience__Details-icon'/>
                <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
                </div> 
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
          <article className='experience__Details'>
                <FaJava className='experience__Details-icon'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__Details'>
                <FaPython className='experience__Details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__Details'>
                <FaNodeJs className='experience__Details-icon'/>
                <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Experienced</small>
                </div> 
            </article>
            <article className='experience__Details'>
                <SiExpress className='experience__Details-icon'/>
                <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
                </div>  
            </article>
            <article className='experience__Details'>
                <FaPhp className='experience__Details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
                </div> 
            </article>
            <article className='experience__Details'>
                <SiMysql className='experience__Details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__Details'>
                <SiMongodb className='experience__Details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
                </div>
               
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience