import React from 'react'
import './about.css'
import ME from '../../assets/myimg.jpg'
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { PiFolderLockLight } from "react-icons/pi";

const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt= "About img"/>
        </div>
         </div>

         <div className='about__content'>
        
          <div className='about__cards'>
            <article className='about__card'>
            <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Months Working</small>

            </article>
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ </small>

            </article>
            <article className='about__card'>
            <PiFolderLockLight  className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>

            </article>
          </div>
          <p>
           I am a Hardworking Graduate from Bahria University Islamabad and As a passionate React.js developer, I thrive on turning ideas into robust and interactive web applications. My journey in the world of web development started with a fascination for creating seamless user experiences, and React.js has been my tool of choice to bring those experiences to life.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
         </div>
    </div>
    </section>
  )
}      
export default about;