import React, { Component } from 'react';

export default class App extends Component {
  render() {
    let num = 1,
      content;
    if (num === 1) {
      content = 'Hello str1'
    } else {
      content = 'Hello str2'
    }
    return (
      <div className="col-xl-1 col-xl-offset-11">
        <h1>Home</h1>
        { content }
      </div>
    );
  }
}

