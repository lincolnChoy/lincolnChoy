import cx from 'classnames'
import React from 'react'
import './Header.scss'
import GitHubLogo from './svg/github'
import Home from './svg/home'
import LinkedInLogo from './svg/linkedin'
import Mail from './svg/mail'
import Person from './svg/person'
import Projects from './svg/projects'
import Skills from './svg/skills'

class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div>
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
        </div>

        <div className="social-media">
          <div className="icon-wrapper">
            <a href="https://github.com/lincolnChoy">
              <GitHubLogo />
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="https://www.linkedin.com/in/lincoln-choy/">
              <LinkedInLogo />
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="mailto:lincoln.choy1997@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
