import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
  id:1,
  image: IMG1,
  title:"Used Furniture Website",
  github:"https://github.com/Saadabbasi12?tab=projects",
  demo:"https://furniturebuyersad.com/",
  },
  {
    id:2,
    image: IMG2,
    title:"Majid Farms",
    github:"https://github.com/Saadabbasi12?tab=projects",
    demo:"",
    },
    {
      id:3,
      image: IMG3,
      title:"Social Media App",
      github:"https://github.com/Saadabbasi12?tab=projects",
      demo:"",
      },
      {
        id:4,
        image: IMG4,
        title:"Animilia tracker",
        github:"https://github.com/Saadabbasi12?tab=projects",
        demo:"",
        },
        {
          id:5,
          image: IMG5,
          title:"Brain Tumor Categorization",
          github:"https://github.com/Saadabbasi12?tab=projects",
          demo:"",
          },
          {
            id:6,
            image: IMG6,
            title:"Flop In",
            github:"https://github.com/Saadabbasi12?tab=projects",
            demo:"",
            },

]

const portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>portfolio</h2>
    <div className='container__portfolio__container'>
      {
        data.map(({id,image,title,github,demo}) => {
          return (
<article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={image} alt='title'></img>
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn' target='blank'>Github</a>
        <a href={demo}className='btn btn-primary' target='blank'>Live Demo</a>
        </div>
      </article>
          )

        })
      }
      
    </div>
   </section>
  )
}

export default portfolio