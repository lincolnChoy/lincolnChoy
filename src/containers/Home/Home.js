import React from 'react'
import { Link } from 'react-router-dom'
import { getSpanArray } from '../../utility'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper home-wrapper scene_element scene_element--fadein">
        <div className="main-content">
          <div>
            <h1>{getSpanArray("Hi,")}</h1>
            <h1>{getSpanArray("I’m Lincoln,")}</h1>
            <h1>{getSpanArray("Web developer |")}</h1>
            <h1>{getSpanArray("Aspiring game developer")}</h1>
          </div>
          <Link to="/about">
              <span className="enlarge-span">Learn more about me!</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home