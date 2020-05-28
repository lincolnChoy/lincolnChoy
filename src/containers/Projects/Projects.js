import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projectsList from './projectList'
import './Projects.scss'


class Projects extends React.Component {
  render() {
    const projectCards = projectsList.map(project => {
      return <ProjectCard project={project} />
    })

    return (
      <div className="wrapper projects-wrapper scene_element scene_element--fadeindown">
        <div className="main-section">
          <h1>Projects</h1>
          <div className="project-card-list">
            {projectCards}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects