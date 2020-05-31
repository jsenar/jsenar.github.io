import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am John Senar</strong>,
      </h1>
      <h1>a full stack web developer and software engineer.</h1>

      <h2 style={{ marginTop: '1em', marginBottom: '0' }}>Languages</h2>
      <ul>
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
      </ul>
      <h2 style={{ marginTop: '2em', marginBottom: '0' }}>Skills</h2>
      <ul>
        <li>React</li>
        <li>Ruby on Rails</li>
        <li>Redux</li>
        <li>Jest</li>
        <li>RSpec</li>
        <li>Node.js</li>
      </ul>
    </div>
    <Footer />
  </header>
)

export default Header
