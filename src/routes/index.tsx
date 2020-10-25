import React from "react";
import { Redirect, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import useAuthentication from "../hooks/useAuthentication";
import PlayListsPage from "../pages/Playlists";
import PublicRoute from "./components/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute";

const Routes = (): JSX.Element => {
  const { isAuthenticated } = useAuthentication();

  const userIsAuthenticated = isAuthenticated();

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          key="sign-in"
          path="/"
          exact
          component={ LoginPage }
          isAuthenticated={ userIsAuthenticated }
        />

        <PrivateRoute
          key="playlists"
          path="/playlists"
          exact
          component={ PlayListsPage }
          isAuthenticated={ userIsAuthenticated }
        />

        <Redirect
          from="*"
          to="/playlists"
        />
      </Switch>
    </BrowserRouter>
  )

};

export default Routes
