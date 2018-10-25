import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const SignedoutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/signin">Login</NavLink></li>
    </ul>
  )
}

SignedoutLinks.propTypes = {

}

export default SignedoutLinks

