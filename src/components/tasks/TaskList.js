import React from 'react'
import TaskSummary from './TaskSummary'

const TaskList = ({ projects }) => {
  
  return (
    <div className="project-list section">
      { projects && projects.map( project => {
        return (<TaskSummary project={ project } key={ project.id }/>)
      }) }  
    </div>
  )
}


export default TaskList
