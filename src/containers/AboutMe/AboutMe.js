import React from 'react'
import { getSpanArray } from '../../utility'
import './AboutMe.scss'

class AboutMe extends React.Component {
  render() {
    return (
      <div className="wrapper about-me-wrapper scene_element scene_element--fadeinup">
        <div className="text-section">
          <h1>{getSpanArray("About me")}</h1>
          <div className="description-container">
            <p>I'm a Computer Systems Engineering student at the University of Auckland who has completed all his studies (I'm still waiting for my graduation).</p>
            <p>
              I have worked as a summer research student at the University of Auckland, and as an intern web developer at a company called Perpetual Guardian.
            </p>
            <p>
              Being a very passionate learner, I am a very motivated individual who loves to tackle any area of programming.
              However, the two areas of programming with which I have most experience, are web and game development.
            </p>
            <p>
              In my spare time, I enjoy working on personal web and game projects. When I'm not doing that, I usually spend my time 
              browsing the web and playing games.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe