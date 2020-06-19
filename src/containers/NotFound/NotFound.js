import React from 'react'
import { Link } from 'react-router-dom'
import { getSpanArray } from '../../utility'
import './NotFound.scss'

class NotFound extends React.Component {
  render() {
    if (this.props.type === 'page') {
      return (
        <div className="wrapper not-found">
          <div className="main-content">
            <h1>{getSpanArray("This page doesn't exist :(")}</h1>
            <Link to="/">
              <span className="enlarge-span">Get me out of here</span>
            </Link>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="wrapper not-found scene_element scene_element--fadeinright">
          <div className="main-content">
            <h1>{getSpanArray("Oops, that project doesn't exist")}</h1>
            <Link to="/projects">
              <span className="enlarge-span">Click here to look at ones that do</span>
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default NotFound