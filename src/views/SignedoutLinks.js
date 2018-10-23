import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const SignedoutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">Sign Up</NavLink></li>
      <li><NavLink to="/">Login</NavLink></li>
    </ul>
  )
}

SignedoutLinks.propTypes = {

}

export default SignedoutLinks

