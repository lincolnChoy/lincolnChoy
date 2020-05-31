import React from 'react'

class Project extends React.Component {
  render() {
    const { project } = this.props

    return (
      <div className="scene_element scene_element--fadeinright">
        <h1>{project.name}</h1>
      </div>
    )
  }
}

export default Project