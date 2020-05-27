import React from 'react'
import './Home.css'

class Home extends React.Component {
  getName = () => {
    const name = "Lincoln Choy"
    
    let content = []

    for (let i = 0; i < name.length; i++) {
      content.push(<span>{name[i]}</span>)
    }

    return content
  }

  getDescriptionOne = () => {
    const description = "Web developer |"
    
    let content = []

    for (let i = 0; i < description.length; i++) {
      content.push(<span>{description[i]}</span>)
    }

    return content
  }

  getDescriptionTwo = () => {
    const description = "Aspiring game developer"
    
    let content = []

    for (let i = 0; i < description.length; i++) {
      content.push(<span>{description[i]}</span>)
    }

    return content
  }


  render() {
    return (
      <div className="home-wrapper">
        <div className="description-container">
            <h1>{this.getName()}</h1>
            <h1>{this.getDescriptionOne()}</h1>
            <h1>{this.getDescriptionTwo()}</h1>
        </div>
        <div className="learn-more-container">
          <p>Learn more about me!</p>
        </div>
      </div>
    )
  }
}

export default Home