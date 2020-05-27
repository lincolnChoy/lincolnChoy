import React from 'react'
import Particles from 'react-particles-js'
import './App.css'
import Header from './components/Header/Header'
import AboutMe from './containers/AboutMe/AboutMe'
import Home from './containers/Home/Home'
import particles from './particles'

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

    switch(this.state.route) {
      case 'home':
        mainContent = <Home routeTo={this.routeTo}/>
        break
      case 'about-me':
        mainContent = <AboutMe />
        break
      default:
        mainContent = <Home routeTo={this.routeTo}/>
        break
    }

    return (
      <div className="container">
          <Particles canvasClassName="particles" params={particles}/>
        <div className="page-wrapper">
          <Header activeRoute={this.state.activeRoute} routeTo={this.routeTo}/>
          {mainContent}
        </div>
      </div>
   
    );
  }
}

export default App;
