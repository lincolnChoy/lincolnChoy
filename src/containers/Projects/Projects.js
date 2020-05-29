import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { getSpanArray } from '../../utility'
import projectsList from './projectList'
import './Projects.scss'

class Projects extends React.Component {
  render() {
    const projectCards = projectsList.map((project, index) => {
      return <ProjectCard project={project} key={index}/>
    })

    return (
      <div className="wrapper projects-wrapper scene_element scene_element--fadeindown">
        <div className="main-section">
          <h1>{getSpanArray("Projects")}</h1>
          <div className="project-card-list">
            {projectCards}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects