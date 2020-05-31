import React from 'react';
import BackArrow from '../../components/atoms/svg/backarrow';
import { getSpanArray } from '../../utility';
import './SingleProject.scss';

class Project extends React.Component {
  getTools = () => {
    let content = this.props.project.tools.map((tool, index) => (
      <li key={index}>{tool}</li>
    ))
    
    return <ul>{content}</ul>
  }

  getLinks = () => {
    let content = this.props.project.links.map((link, index) => (
      <button key={index} onClick={() => window.open(link.url, '_blank')}>{link.name}</button>
    ))

    return content
  }

  render() {
    const { project } = this.props

    return (
      <div className="wrapper single-project-wrapper scene_element scene_element--fadeinright">
        <div className="header-content">
          <div className="icon-wrapper" onClick={() => this.props.resetProject()}>
            <BackArrow />
          </div>
          <h1>{getSpanArray(project.name)}</h1>
        </div>
        <p>{project.description}</p>

        <h2>Tools used</h2>
        <div className="tools">
          {this.getTools()}
        </div>
        <div className="links">
          {this.getLinks()}
        </div>
      </div>
    )
  }
}

export default Project