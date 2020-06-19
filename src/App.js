import React from 'react'
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom"
import './App.scss'
import Header from './components/molecules/Header/Header'
import AboutMe from './containers/AboutMe/AboutMe'
import Home from './containers/Home/Home'
import NotFound from './containers/NotFound/NotFound'
import Projects from './containers/Projects/Projects'
import Skills from './containers/Skills/Skills'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper m-scene">
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <NotFound type={'page'} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App