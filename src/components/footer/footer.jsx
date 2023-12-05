import React from 'react'
import './footer.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Saad Abbasi</a>

      <ul className='permalinks'>
       <li><a href='#'>Home</a></li>
       <li><a href='#about'>About</a></li>
       <li><a href='#experience'>Experience</a></li>
       <li><a href='#services'>Services</a></li>
       <li><a href='#portfolio'>Portfolio</a></li>
       <li><a href='#contact'>Contact</a></li>
       
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/saad-ali-abbasi/'> <FaLinkedinIn /></a>
        <a href='https://github.com/Saadabbasi12'> <FaGithubAlt /></a>
        
      </div>
      <div className='footer__copyright'>
        <small>&copy;All rights reserved.</small>

      </div>
    </footer>
  )
}

export default footer;