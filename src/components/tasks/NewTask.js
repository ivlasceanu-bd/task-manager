import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

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
    this.props.createProject(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(NewTask) 
