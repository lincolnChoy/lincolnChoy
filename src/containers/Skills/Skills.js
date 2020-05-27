import React from 'react'
import skillsList from './skillList'
import ExperienceBar from './ExperienceBar/ExperienceBar'
import './Skills.scss'

class Skills extends React.Component {
  render() {
    let experience = skillsList.map(skill => <ExperienceBar skill={skill.skill} value={skill.value}/>)

    return (
      <div className="wrapper skills-wrapper scene_element scene_element--fadeinright">
        <div className="main-content">
          <h1>Skills & Experience</h1>
          <div className="sub-content-container">
            <div className="text-section">
            <p>Having studied computer systems, as well as complementing those studies with industry experience, I acquired many
              skills and accumulated good experience pertaining to software development.
            </p>
            </div>

            <div className="graph-section">
              <h2>Stuff I've worked with</h2>
              {experience}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills