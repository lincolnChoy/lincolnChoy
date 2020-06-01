import React from 'react'
import ExperienceBar from '../../components/molecules/ExperienceBar/ExperienceBar'
import { getSpanArray } from '../../utility'
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
              <p className="hide-me-1">Having studied computer systems, as well as complementing those studies with industry experience, I acquired many
                skills and accumulated good experience pertaining to software development.
              </p>
              <p className="hide-me-2">
                During my tenure, my day to day tasks involved developing good-looking and responsive UI's, writing Jest tests to make
                sure the front-end code is bug-free, and writing Selenium tests to make sure the entire system from our API's to the UI
                work well together. 
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