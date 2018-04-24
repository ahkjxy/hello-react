import React, { Component } from 'react';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-xl-1 col-xl-offset-11">
        <h1>Home</h1>
        <div>
          <h4>My Name is: <b>{this.props.name}</b> and my age is: <b>{this.props.age}</b></h4>
          <h5>My hobbies list:</h5>
          <ul>
            {this.props.user.hobbies.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

