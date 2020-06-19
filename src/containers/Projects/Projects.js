import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import CardList from '../../components/molecules/CardList/CardList'
import Project from '../SingleProject/SingleProject'
import './Projects.scss'

const Projects = () => {
  let match = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${match.path}/:projectName`}>
        <Project />
      </Route>
      <Route exact path={match.path}>
        <div className="wrapper projects-wrapper scene_element scene_element--fadeindown">
          <div className="main-section">
            <CardList baseUrl={match.url}/>
          </div>
        </div>
      </Route>
      <Route path="*">
        <Project />
      </Route>
    </Switch>
  )
}

export default Projects