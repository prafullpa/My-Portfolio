import React from 'react'
import CTA from './CTA'
import Social from './Social'
import './Header.css'
import me from './pik1.jpg'

function Header() {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Prafull Patidar</h1>
      <h5 className="text-light">Full Stack Developer</h5>
      <CTA/>
      <Social/>
      <div className="me">
        <img src={me} alt="me" />
      </div>
      <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
