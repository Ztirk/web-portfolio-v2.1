import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
 
  return (
    <div className='nav-container'>
      <a href="#home"><img className='logo' src='./logo/z-high-resolution-logo-color-on-transparent-background.png' alt='logo'></img></a>
      <div className='navbar'>
          <ul>
            <li>
              <a href="#home">Home</a>
              <div className='underline'></div>
          </li>
          <li>
              <a href="#works">Projects</a>
            <div className='underline'></div>
          </li>
          <li>
              <a href="#contact">Contact</a>
            <div className='underline'></div>
          </li>
        </ul>
      </div>
      <div className='icon'>
        <ul>
          <li>
              <a target='_blank' href='https://www.linkedin.com/in/tanakrit-promwungkwa-511997244/?originalSubdomain=th'>
                <i className="fa-brands fa-linkedin fa-lg fa-bounce" ></i>
              </a>
          </li>
          <li>
              <a target='_blank' href="https://github.com/Ztirk">
                <i className="fa-brands fa-square-github fa-lg fa-bounce"></i>
              </a>
          </li>
          <li>
              <a target='_blank' href="mailto:tanakrit.promwungkwa@gmail.com">
                <i className="fa-solid fa-square-envelope fa-lg fa-bounce"></i>
              </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar