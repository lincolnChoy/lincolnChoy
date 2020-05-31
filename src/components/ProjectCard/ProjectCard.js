import React from 'react'
import './ProjectCard.scss'

class ProjectCard extends React.Component {
  render() {
    const { onClick, project } = this.props

    return (
      <div className="project-card">
        <div className="project-card-layer-1">
          <h2>{project.name}</h2>
          <img alt="thumbnail" src={require(`../../assets/thumbnails/${project.thumbnail}`)} />
        </div>
        <div className="project-card-layer-2">
          <div className="content-wrapper">
            <h3>{project.brief}</h3>
            <button onClick={() => onClick(project) }>Learn more</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard