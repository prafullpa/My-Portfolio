import React from 'react'
import './Projects.css'

import portfolio from './portfolio.png'
import Project2 from './Project2.png'
import Project1 from './Project1.png'

function Projects() {
  return (
   <section  id='project'>
     <h5>My Recent Work</h5>
     <h2>Projects</h2>
     <div className='container project_container'>
        <article className='project_item'>
           <div className='project_img'>
              <img src={Project1} alt='img'/>
           </div>
           <h3>Github Detector</h3>
          <div className='item_cta'>
          <a href='https://github.com/prafullpa/Github-Detector-Main' className='btn' target='_blank'>Github</a>
           <a href='https://github.com/prafullpa/Github-Detector-Main' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={portfolio} alt='img'/> 
           </div>
           <h3>My-Portfolio</h3>
           <div className='item_cta'>
           <a href='#' className='btn' target='_blank'>Github</a>
           <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={Project2} alt='img'/>
           </div>
           <h3>Weather-App</h3>
           <div className='item_cta'>
           <a href='https://github.com/prafullpa/Weather-App' className='btn' target='_blank'>Github</a>
           <a href='https://github.com/prafullpa/Weather-App' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
     </div>
   </section>
  )
}

export default Projects
