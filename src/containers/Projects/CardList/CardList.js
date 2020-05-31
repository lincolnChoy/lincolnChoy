import React from 'react'
import { getSpanArray } from '../../../utility'
import ProjectCard from '../../../components/ProjectCard/ProjectCard'
import projectsList from '../projectList'

class CardList extends React.Component {
  render() {
    const projectCards = projectsList.map((project, index) => {
      return <ProjectCard project={project} key={index} onClick={this.props.displayProject}/>
    })

    return (
      <React.Fragment>
        <h1>{getSpanArray("Projects")}</h1>
        <div className="project-card-list">
          {projectCards}
        </div>
      </React.Fragment>

    )
  }
}

export default CardList