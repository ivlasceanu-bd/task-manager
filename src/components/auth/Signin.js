import React, { Component } from 'react'

class Signin extends Component {

  state = {
    email: '',
    password: ''
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
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.inputChangeHandler } />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.inputChangeHandler } />
          </div>

          <div className="input-field">
            <button className="btn pink darken-3 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin