import React from 'react'
import Particles from 'react-particles-js'
import particles from './particles'
import './App.css'
import Header from './components/Header/Header'
import Home from './containers/Home/Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: 'home'
    }
  }

  render() {
    let mainContent

    switch(this.state) {
      case 'home':
        mainContent = <Home />
        break
      default:
        mainContent = <Home />
        break
    }

    return (
      <div className="container">
          <Particles canvasClassName="particles" params={particles}/>
        <div className="page-wrapper">
          <Header />
          {mainContent}
        </div>
      </div>
   
    );
  }
}

export default App;
