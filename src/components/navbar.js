import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
        <h1 className="logo">My Portfolio</h1>
      <ul className="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </div>

    
  )
}

export default navbar