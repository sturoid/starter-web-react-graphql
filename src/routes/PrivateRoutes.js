import React from 'react';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';

const routes = () => (
  <>
    <PrivateRoute exact path="/" component={Dashboard} />
  </>
);

export default routes;
