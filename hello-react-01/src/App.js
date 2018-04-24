import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-1 col-xl-offset-11">
            <h1>Hello world!</h1>
          </div>
          <Header />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
