import React, { Component } from 'react';

const List = (props) =>  {
  return (
    <button className="btn btn-secondary">
      {props.btnText}
    </button>
  )
}

export default class Header extends Component {
  render() {
    return (
      <div className="col-xl-1 col-xl-offset-11">
        <h1>Header</h1>
        <List btnText="StateLess Compontents" />
      </div>
    );
  }
}

