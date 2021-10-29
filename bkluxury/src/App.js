import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Demo from './components/Demo';

import Booking from './pages/Booking';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import SignIn from './pages/SignIn';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">        
          <Demo title='Cái này demo thôi' />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/booking">Booking</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
            </ul>
        </nav>
          <Switch>
            <Route exact path="/booking">
              <Booking />
            </Route>
            <Route exact path="/rooms">
              <Rooms />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/signin">
              <SignIn/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
