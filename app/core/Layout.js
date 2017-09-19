// @flow
import React, { Component } from 'react';
import Header from 'modules/header';

export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}
