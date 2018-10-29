import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class Signup extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
 
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth } = this.props;
    if ( auth.uid ) return <Redirect to='/' />

  return (
    <div className="container">
    <form className="white z-depth-1" onSubmit={ this.formSubmitHandler }>
      <h5 className="grey-text text-darken-3">Sign up</h5>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={ this.inputChangeHandler } />
      </div>

      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={ this.inputChangeHandler } />
      </div>

      <div className="input-field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={ this.inputChangeHandler } />
      </div>

      <div className="input-field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={ this.inputChangeHandler } />
      </div>

      <div className="input-field">
        <button className="btn pink darken-3 z-depth-0">Signup</button>
      </div>
    </form>
  </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)