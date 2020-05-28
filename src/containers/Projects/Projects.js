import React from 'react'
import './Projects.scss'
import projectsList from './projectList'

class Projects extends React.Component {
  render() {
    return (
      <div className="wrapper projects-wrapper scene_element scene_element--fadeindown">
        <div className="text-section">
          <h1>Projects</h1>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                {projectsList[0].name}
              </div>
              <div className="project-card-back">
                {projectsList[1].name}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects