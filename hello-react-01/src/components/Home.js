import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: this.props.age,
      isOpen: false
    }
  }
  myAgeAdd () {
    this.setState({
      age: this.state.age + 3
    })
  }
  setOpen () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const children = this.props.children,
      isOpen = this.state.isOpen;
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
          <div className="line"></div>
          <h5>My hobbies list:</h5>
          <ul>
            {this.props.user.hobbies.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <div className="line"></div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" onClick={()=>{this.setOpen()}}>
              Dropdown button
            </button>
            <div className={isOpen ? "dropdown-menu show" : "dropdown-menu"}>
              <a className="dropdown-item" onClick={()=>this.setState({isOpen:false})}>Action</a>
              <a className="dropdown-item">Another action</a>
              <a className="dropdown-item">Something else here</a>
            </div>
          </div>
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