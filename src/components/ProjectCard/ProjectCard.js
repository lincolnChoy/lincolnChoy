import React from 'react'
import './ProjectCard.scss'

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props

    return (
      <div className="project-card">
        <div className="project-card-layer-1">
          <h2>{project.name}</h2>
          <img src={project.thumbnail} />
        </div>
        <div className="project-card-layer-2">
          <div className="content-wrapper">
            <h3>{project.brief}</h3>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard