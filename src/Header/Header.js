import React from 'react'
import './Header.css'
import Home from './svg/Home'
import Mail from './svg/mail'
import Person from './svg/person'
import Projects from './svg/projects'
import Skills from './svg/skills'

class Header extends React.Component {

  render() {
    return (
      <div className="app-header">
        <div className="icon-wrapper">
          <Home />
        </div>
        <div className="icon-wrapper">
          <Person />
        </div>
        <div className="icon-wrapper">
          <Skills />
        </div>
        <div className="icon-wrapper">
          <Projects />
        </div>
        <div className="icon-wrapper">
          <Mail />
        </div>
      </div>
    )
  }
}

export default Header;
