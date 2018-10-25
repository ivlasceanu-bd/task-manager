import React, { Component } from 'react'

class NewTask extends Component {

  state = {
    title:'',
    content: ''
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
          <h5 className="grey-text text-darken-3">Create new task</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={ this.inputChangeHandler }/>
          </div>
    
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" onChange={ this.inputChangeHandler } className="materialize-textarea"></textarea>
          </div>
    
          <div className="input-field">
            <button className="btn pink darken-3 z-depth-0">Create</button>
          </div>
        </form>
    </div>
    )
  }
}

export default NewTask 
