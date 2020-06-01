import React from 'react'
import './App.scss'
import Header from './components/molecules/Header/Header'
import AboutMe from './containers/AboutMe/AboutMe'
import Home from './containers/Home/Home'
import Projects from './containers/Projects/Projects'
import Skills from './containers/Skills/Skills'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeRoute: 'home'
    }
  }

  routeTo = (activeRoute) => {
    this.setState({ activeRoute })
  }

  render() {
    let mainContent

    switch(this.state.activeRoute) {
      case 'home':
        mainContent = <Home routeTo={this.routeTo}/>
        break
      case 'about-me':
        mainContent = <AboutMe />
        break
      case 'skills':
        mainContent=<Skills />
        break
      case 'projects':
        mainContent=<Projects />
        break
      default:
        mainContent = <Home routeTo={this.routeTo}/>
        break
    }

    return (
      <div className="page-wrapper m-scene">
        <Header activeRoute={this.state.activeRoute} routeTo={this.routeTo}/>
        {mainContent}
      </div>
    );
  }
}

export default App;
