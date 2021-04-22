import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { myContext } from './Context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const userObject = useContext(myContext);

  return (
    <Route
      {...rest}
      render={props =>
        userObject ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
