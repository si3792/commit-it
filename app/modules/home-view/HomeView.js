// @flow
import React, { Component } from 'react';
import MonthView from 'modules/month-view';

export default class HomeView extends Component {
  render() {
    return (
      <div className="home">
        <MonthView />
      </div>
    );
  }
}
