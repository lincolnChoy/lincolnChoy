import React from 'react'
import './ProjectCard.scss'

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props

    return (
      <div className="project-card">
        <div className="project-card-layer-1">
          <h2>{project.name}</h2>
        </div>
        <div className="project-card-layer-2">
          <button>Learn more</button>
        </div>
      </div>
    )
  }
}

export default ProjectCard