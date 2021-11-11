import React, { Component } from 'react';
import './App.css';
import Demo from './components/Demo';
import Routes from './pages/Routes';
import Booking from './pages/booking/Booking';



class App extends Component {
  render(){
    return (
        <div className="App">        
          <Routes />
        </div>
    );
  }
}

export default App;
