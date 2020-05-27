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
import Menu from './svg/menu'
import CloseMenu from './svg/backarrow'

class Header extends React.Component {
  state = {
    menuOpen: false
  }

  componentDidUpdate = () => {
    window.addEventListener('resize', this.resetMenu)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resetMenu)
  }

  resetMenu = () => {
    if (window.innerWidth > 800 && this.state.menuOpen) {
      this.setState({ menuOpen: false })
    }
  }

  render() {
    return (
      <div className={cx({
        "app-header": true,
        "menu-open": this.state.menuOpen
      })}>
        <div className="icon-container">
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

        <div className="menu-icon" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
          {
            this.state.menuOpen ? 
              <CloseMenu />
              :
              <Menu />
          }
        </div>

        <div className="icon-container social-media">
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
