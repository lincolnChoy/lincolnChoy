import React from 'react'
import projectsList from '../../../containers/Projects/projectList'
import { getSpanArray } from '../../../utility'
import ProjectCard from '../ProjectCard/ProjectCard'

class CardList extends React.Component {
  render() {
    const projectCards = projectsList.map((project, index) => {
      return <ProjectCard baseUrl={this.props.baseUrl} project={project} key={index} />
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