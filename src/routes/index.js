import React from 'react';
import { Route } from 'react-router-dom';
import { About } from '../pages';

const Router = () => {
  return <Route path="/" component={About} />;
};

export default Router;
