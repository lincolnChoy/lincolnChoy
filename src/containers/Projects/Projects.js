import React from 'react'
import CardList from './CardList/CardList'
import Project from './Project/Project'
import projectsList from './projectList'
import './Projects.scss'

class Projects extends React.Component {
  state = {
    // project: null,
    project: projectsList[0]
  }

  displayProject = (project) => {
    this.setState({ project })
  }

  render() {
    return (
      <div className="wrapper projects-wrapper scene_element scene_element--fadeindown">
        <div className="main-section">
          {
            this.state.project === null
            ? <CardList displayProject={this.displayProject}/>
            : <Project project={this.state.project}/>
          }
        </div>
      </div>
    )
  }
}

export default Projects