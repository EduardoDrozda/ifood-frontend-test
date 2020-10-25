import React from 'react';
import { Redirect, Route } from "react-router";
import { RouteProps } from '../types/router-props';

export const PrivateRoute: React.FC<RouteProps> = ({
  component,
  isAuthenticated,
  ...rest
}) => {

  return isAuthenticated
  ? <Route { ...rest } component={ component }/>
  : <Redirect
    to="/"
  />
}
