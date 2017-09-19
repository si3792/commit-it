/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import HomeView from 'modules/home-view';

export default () => (
  <Switch>
    <Route path="/" component={HomeView} />
  </Switch>
);
