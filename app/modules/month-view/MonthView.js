// @flow
import React, { Component } from 'react';

export default class MonthView extends Component {
  render() {
    return (
      <div className="month-view">
        <div className="month-view-table">
          <div className="month-view-table-head">M</div>
          <div className="month-view-table-head">T</div>
          <div className="month-view-table-head">W</div>
          <div className="month-view-table-head">T</div>
          <div className="month-view-table-head">F</div>
          <div className="month-view-table-head">S</div>
          <div className="month-view-table-head">S</div>
        </div>
      </div>
    );
  }
}
