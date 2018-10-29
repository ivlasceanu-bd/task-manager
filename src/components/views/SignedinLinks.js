import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedinLinks = (props) => {

  return (
    <ul className="right">
      <li><NavLink to="/create">New Task</NavLink></li>
      <li><button onClick={ props.signOut }>Logout</button></li>
      <li><NavLink to="/" className="btn btn-floating blue-grey lighten-2">IV</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(SignedinLinks)

