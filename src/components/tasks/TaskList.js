import React from 'react'
import TaskSummary from './TaskSummary'
import { Link } from 'react-router-dom'

const TaskList = ({ projects }) => {
  
  return (
    <div className="project-list section">
      { projects && projects.map( project => {
        return (
          <Link to={ '/project/' + project.id } key={ project.id } >
            <TaskSummary project={ project }/>
          </Link>)
      }) }  
    </div>
  )
}


export default TaskList
