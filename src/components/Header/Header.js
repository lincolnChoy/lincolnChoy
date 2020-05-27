import React from 'react'
import './Header.css'
import Home from './svg/home'
import Mail from './svg/mail'
import Person from './svg/person'
import Projects from './svg/projects'
import Skills from './svg/skills'
import cx from 'classnames'

class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className={cx({
          "icon-wrapper": true,
          "active-icon": this.props.activeRoute === 'home'
        })} 
          onClick={() => this.props.routeTo('home')}>
          <Home />
        </div>
        <div className={cx({
          "icon-wrapper": true,
          "active-icon": this.props.activeRoute === 'about-me'
        })} 
          onClick={() => this.props.routeTo('about-me')}>
          <Person />
        </div>
        <div className={cx({
          "icon-wrapper": true,
          "active-icon": this.props.activeRoute === 'skills'
        })} 
          onClick={() => this.props.routeTo('skills')}>
          <Skills />
        </div>
        <div className={cx({
          "icon-wrapper": true,
          "active-icon": this.props.activeRoute === 'projects'
        })} 
          onClick={() => this.props.routeTo('projects')}>
          <Projects />
        </div>
        <div className={cx({
          "icon-wrapper": true,
          "active-icon": this.props.activeRoute === 'contact-me'
        })} 
          onClick={() => this.props.routeTo('contact-me')}>
          <Mail />
        </div>
      </div>
    )
  }
}

export default Header
