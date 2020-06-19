import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.scss'

class ProjectCard extends React.Component {
  render() {
    const { baseUrl, project } = this.props

    return (
      <div className="project-card">
        <div className="project-card-layer-1">
          <h2>{project.name}</h2>
          <img alt="thumbnail" src={require(`../../../assets/thumbnails/${project.thumbnail}`)} />
        </div>
        <div className="project-card-layer-2">
          <div className="content-wrapper">
            <h3>{project.brief}</h3>
            <Link to={`${baseUrl}/${project.name}`}>
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard