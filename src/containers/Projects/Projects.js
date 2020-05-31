import React from 'react'
import CardList from '../../components/molecules/CardList/CardList'
import SingleProject from '../SingleProject/SingleProject'
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

  resetProject = () => {
    this.setState({ project: null })
  }

  render() {
    if (this.state.project === null) {
      return (
        <div className="wrapper projects-wrapper scene_element scene_element--fadeindown">
          <div className="main-section">
            <CardList displayProject={this.displayProject}/>
          </div>
        </div>
      )
    }
    else {
      return <SingleProject project={this.state.project} resetProject={this.resetProject} />
    }
  }
}

export default Projects