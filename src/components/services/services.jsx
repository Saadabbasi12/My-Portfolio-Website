import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
   <section id='services'>
    <h5> What I Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX</h3>
        </div>
        < ul className='service__list'>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Interaction Design</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Responsive Design</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>Usability Testing </p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Design Systems</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>Continuous Improvement </p>
        </li>
        </ul>
      </article>
      {/* end of ui ux */}

      <article className='service'>
        <div className='service__head'>
          <h3>WEB Development</h3>
        </div>
        < ul className='service__list'>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Responsive Web Design</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Web Application Development</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>Maintenance and Support </p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Scalability Planning</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>Custom Web Development</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>Front End Development</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>BackEnd Development </p>
        </li>
        </ul>
      </article>
      {/* end of WEB development */}

      <article className='service'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>
        < ul className='service__list'>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Content Strategy</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Infographic Design</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>Case Study Writing </p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p> Social Media Content Creation</p>
        </li>
        <li> 
          <BiCheck  className='service__list-icon' />
          <p>SEO Content Writing</p>
        </li>
        </ul>
      </article>
      {/* end of content creation*/}

    </div>
   </section>
  )
}

export default services