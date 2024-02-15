import React from 'react'
import {GiSkills} from 'react-icons/gi'
import {FaDiagramProject} from 'react-icons/fa6'
import './About.css'
import image from './pik2.jpg'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
          <div className='about_me'>
              <div className='about-me-img'>
                  <img src={image} alt='image'/>
              </div>
          </div>
          <div className='about_content'>
             <div className='about_cards'>
                <article className='about_card'>
                    <GiSkills className='about_icon'/>
                    <a href='#skill'> <h5>Skills</h5></a>
                </article>
                <article className='about_card'>
                    <FaDiagramProject className='about_icon'/>
                    <a href='#project'><h5>Projects</h5></a>
                </article>
             </div>
             <p> I'm Prafill Patidar, a recent Master of Computer Application graduate from Medi-Caps University Indore.  I'm an enthusiastic fresher with a passion for crafting high-quality products that cater to customer needs. I have a strong appetite for learning new technologies to enhance my ability to create exceptional software. While I genuinely enjoy all aspects of my work, my true passion lies in hands-on software development. While I don't mind estimating projects for clients, I find the actual process of creating software to be the most fulfilling part of my journey.
             </p>
             <a href='#contact' className='btn btn-primary'>Let`s Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
