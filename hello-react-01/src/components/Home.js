import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: this.props.age
    }
  }
  myAgeAdd () {
    this.setState({
      age: this.state.age + 3
    })
  }
  render() {
    let children = this.props.children;
    return (
      <div className="col-xl-1 col-xl-offset-11">
        <h1>Home</h1>
        <div>
          <h4>My Name is: <b>{this.props.name}</b> and my age is: <b>{this.state.age}</b></h4>
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={() => {this.myAgeAdd()}}>My Age add 3</button>
          </div>
          <br />
          <p className="text-muted">
            <b>this state age is: {this.state.age}, this props age is: {this.props.age}</b>
          </p>
          <br />
          <h5>My hobbies list:</h5>
          <ul>
            {this.props.user.hobbies.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        {children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
}