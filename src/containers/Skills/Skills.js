import React from 'react'
import { getSpanArray } from '../../utility'
import ExperienceBar from './ExperienceBar/ExperienceBar'
import skillsList from './skillList'
import './Skills.scss'

class Skills extends React.Component {
  render() {
    let experience = skillsList.map((skill, index) => <ExperienceBar key={index} skill={skill.skill} value={skill.value}/>)

    return (
      <div className="wrapper skills-wrapper scene_element scene_element--fadeinright">
        <div className="main-content">
          <h1>{getSpanArray("Skills & Experience")}</h1>
          <div className="sub-content-container">
            <div className="text-section">
              <p>Having studied computer systems, as well as complementing those studies with industry experience, I acquired many
                skills and accumulated good experience pertaining to software development.
              </p>
            </div>
            <div className="graph-section">
              {experience}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills