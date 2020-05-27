import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AboutMe from './containers/AboutMe/AboutMe'
import Home from './containers/Home/Home'

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
      default:
        mainContent = <Home routeTo={this.routeTo}/>
        break
    }

    return (
      <div className="container">
        <div className="page-wrapper m-scene">
          <Header activeRoute={this.state.activeRoute} routeTo={this.routeTo}/>
          {mainContent}
        </div>
      </div>
   
    );
  }
}

export default App;
