import React from 'react';
import { Redirect, Route } from "react-router";
import { RouteProps } from '../types/router-props';

const PublicRoute: React.FC<RouteProps> = (
  {
    component,
    isAuthenticated,
    path,
    ...rest
  }
) => {

  return isAuthenticated
      ? <Redirect
        from={ path }
        to="/playlists"
      />
      : <Route { ...rest } component={ component }/>
}

export default PublicRoute;
