import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';

export default function PublicRoutes() {
  return (
    <>
      <Route exact path="/" component={SignIn} />
    </>
  );
}
