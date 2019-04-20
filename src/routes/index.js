import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../pages';

const Router = ({ classes }) => {
  return (
    <div>
      <Route path="/" component={About} />
    </div>
  );
};

export default Router;
