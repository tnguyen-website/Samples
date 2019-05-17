import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Samples } from '../pages';

const Router = () => {
  console.log(Samples);
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/samples" component={Samples} />
        <Route path="/" component={About} />
      </Switch>
    </div>
  );
};

export default Router;
