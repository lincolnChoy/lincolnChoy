import React from 'react'
import { getSpanArray } from '../../utility'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper home-wrapper scene_element scene_element--fadeinright">
        <div className="description-container">
            <h1>{getSpanArray("Hi,")}</h1>
            <h1>{getSpanArray("I’m Lincoln,")}</h1>
            <h1>{getSpanArray("Web developer |")}</h1>
            <h1>{getSpanArray("Aspiring game developer")}</h1>
        </div>
        <div className="learn-more-container" onClick={() => this.props.routeTo('about-me')}>
          <span>Learn more about me!</span>
        </div>
      </div>
    )
  }
}

export default Home