import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Tiki } from '../pages';

const Router = ({ classes }) => {
  return (
    <div>
      <Route exact path="/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/tiki" component={Tiki} />
    </div>
  );
};

export default Router;
