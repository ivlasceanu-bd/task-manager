import React from 'react'

const TaskSummary = ({ project }) => {
  console.log(project)

  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ project.title }</span>
        <p>Posted by </p>
        <p className="grey-text">24th October, 1pm</p>
      </div>
    </div>
  )
}

export default TaskSummary