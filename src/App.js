import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/Dashboard';
import {Route, BrowserRouter as Router} from 'react-router-dom'


class App extends Component{

  render(){
    return (
      <>
        <Router>
          <Route path='/' exact strict component={Login} />
          <Route path='/dashboard' strict component={Dashboard} />
        </Router>
      </>
    );
    }
}

export default App;
