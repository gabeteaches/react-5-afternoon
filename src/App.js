import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
import Router from './router'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
    
          <Router />

        </div>
      </HashRouter>
    );
  }
}

export default App;