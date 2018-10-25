import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedinLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Task</NavLink></li>
      <li><NavLink to="/">Logout</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating blue-grey lighten-2">IV</NavLink></li>
    </ul>
  )
}


export default SignedinLinks

