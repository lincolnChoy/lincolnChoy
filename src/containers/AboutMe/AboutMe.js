import React from 'react'
import './AboutMe.scss'

class AboutMe extends React.Component {
  render() {
    return (
      <div className="wrapper about-me-wrapper scene_element scene_element--fadeinup">
        <div className="text-section">
          <h1>About me</h1>
          I'm a Computer Systems Engineering student at the University of Auckland who has completed all his studies (I'm still waiting for my graduation).
        </div>
      </div>
    )
  }
}

export default AboutMe