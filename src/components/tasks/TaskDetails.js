import React from 'react'

const TaskDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Task name - {id} </span>
          <p>Lorem ipsum</p>
        </div>
        <div className="card-action grey lighten-5 grey-text">
        <div>Posted by John User</div>
        <div>24th October, 1pm</div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails