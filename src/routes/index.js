import React from 'react';
import { Route } from 'react-router-dom';
import { Samples } from '../pages';

const Router = () => {
  console.log(Samples);
  return (
    <div>
      <Route path="/samples" component={Samples} />
    </div>
  );
};

export default Router;
