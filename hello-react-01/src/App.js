import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    const user = {
      name: 'Jesn jhon',
      age: 12,
      hobbies: ['Sports', 'Readings']
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-1 col-xl-offset-11">
            <h1>Hello world!</h1>
          </div>
          <div className="line"></div>
          <Header />
          <div className="line"></div>
          <button className="btn btn-primary" onClick={this.resetAge}>Reset Age</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary" onClick={this.alertAge}>Alert Age</button>
          <Home name={user.name} age={user.age} user={user}>
            <p>I'm Header childen</p>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
