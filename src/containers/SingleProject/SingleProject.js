import React from 'react';
import BackArrow from '../../components/atoms/svg/backarrow';
import { getSpanArray } from '../../utility';
import './SingleProject.scss';

class Project extends React.Component {
  getDescriptions = () => {
    let content = this.props.project.descriptions.map((description, index) => (
      <p key={index}>{description}</p>
    ))
    
    return content
  }

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

  getScreenshots = () => {
    let content = this.props.project.screenshots.map((link, index) => (
      <img key={index} alt="project_img" src={link} />
    ))

    return content
  }

  render() {
    const { project } = this.props

    return (
      <div className="wrapper single-project-wrapper scene_element scene_element--fadeinright">
        <div className="main-content">
          <div className="header-content">
            <div className="icon-wrapper" onClick={() => this.props.resetProject()}>
              <BackArrow />
            </div>
            <h1>{getSpanArray(project.name)}</h1>
          </div>
          <p>{this.getDescriptions()}</p>

          <h3>Tools used</h3>
          <div className="tools">
            {this.getTools()}
          </div>
          <div className="links">
            {this.getLinks()}
          </div>
          {/* <div className="screenshots">
            {this.getScreenshots()}
          </div> */}
        </div>
      </div>
    )
  }
}

export default Project