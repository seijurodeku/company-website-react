import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return <Route render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/admin" />)} {...rest} />;
};

export default ProtectedRoute;