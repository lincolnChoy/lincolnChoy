import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BackArrow from '../../components/atoms/svg/backarrow'
import { getSpanArray } from '../../utility'
import NotFound from '../NotFound/NotFound'
import projectList from '../Projects/projectList'
import './SingleProject.scss'


const getDescriptions = (project) => {
  let content = project.descriptions.map((description, index) => (
    <p key={index}>{description}</p>
  ))
  
  return content
}

const getTools = (project) => {
  let content = project.tools.map((tool, index) => (
    <li key={index}>{tool}</li>
  ))
  
  return <ul>{content}</ul>
}

const getLinks = (project) => {
  let content = project.links.map((link, index) => (
    <button key={index} onClick={() => window.open(link.url, '_blank')}>{link.name}</button>
  ))

  return content
}

const Project = () => {
  const { projectName } = useParams()
  const project = projectList.find(project => project.name === projectName)
  
  if (project) {
    return (
      <div className="wrapper single-project-wrapper scene_element scene_element--fadeinright">
        <div className="main-content">
          <div className="header-content">
            <Link to="/projects">
              <div className="icon-wrapper">
                <BackArrow />
              </div>
            </Link>
            <h1>{getSpanArray(project.name)}</h1>
          </div>
          {getDescriptions(project)}
          <h3>Tools used</h3>
          <div className="tools">
            {getTools(project)}
          </div>
          <div className="links">
            {getLinks(project)}
          </div>
        </div>
      </div>
    )
  }
  else {
    return <NotFound />
  }
}

export default Project