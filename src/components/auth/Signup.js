import React, { Component } from 'react'

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
    console.log(this.state);
  }

  render() {
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

export default Signup