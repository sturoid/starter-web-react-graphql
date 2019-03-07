import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import userIsLoggedin from '~/utils/user-utils';
import { childrenType } from '~/lib/prop-types';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        userIsLoggedin() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: childrenType.isRequired
};
