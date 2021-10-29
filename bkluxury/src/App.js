import React, { Component } from 'react';

import './App.css';
import Demo from './components/Demo';
import Routes from './pages/Routes';



class App extends Component {
  render(){
    return (
        <div className="App">        
          <Demo title='Cái này demo thôi' />
          <Routes />
        </div>
    );
  }
}

export default App;
