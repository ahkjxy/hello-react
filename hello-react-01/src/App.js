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
          <Header />
          <Home name={user.name} age={user.age} user={user} />
        </div>
      </div>
    );
  }
}

export default App;
