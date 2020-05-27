import React from 'react'
import './Home.css'

class Home extends React.Component {
  getSpanArray = (text) => {
    let content = []

    for (let i = 0; i < text.length; i++) {
      content.push(<span>{text[i]}</span>)
    }

    return content
  }

  render() {
    return (
      <div className="home-wrapper scene_element scene_element--fadeinright">
        <div className="description-container">
            <h1>{this.getSpanArray("Hi,")}</h1>
            <h1>{this.getSpanArray("I’m Lincoln,")}</h1>
            <h1>{this.getSpanArray("Web developer |")}</h1>
            <h1>{this.getSpanArray("Aspiring game developer")}</h1>
        </div>
        <div className="learn-more-container" onClick={() => this.props.routeTo('about-me')}>
          <p>Learn more about me!</p>
        </div>
      </div>
    )
  }
}

export default Home