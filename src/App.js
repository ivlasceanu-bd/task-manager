import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/views/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TaskDetails from './components/tasks/TaskDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import NewTask from './components/tasks/NewTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={TaskDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={NewTask} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
