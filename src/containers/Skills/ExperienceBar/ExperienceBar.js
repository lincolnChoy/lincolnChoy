import React from 'react'
import './ExperienceBar.scss'

class ExperienceBar extends React.Component {

  render() {
    const { skill, value } = this.props

    return (
      <div className="experience-bar">
        <div className="skill-name">{skill}</div>
        <div className="skill-meter">
          <div className="skill-value" style={{width: `${value}%`}}></div>
        </div>
      </div>
    )
  }
}

export default ExperienceBar