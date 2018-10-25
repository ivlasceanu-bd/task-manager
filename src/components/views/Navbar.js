import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
// import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey">
      <div className="container">
        <Link to="/" className="brand-logo">Task Manager</Link>
        <SignedinLinks />
        <SignedoutLinks />
      </div>
    </nav>
  )
}

// Navbar.propTypes = {

// }

export default Navbar;
