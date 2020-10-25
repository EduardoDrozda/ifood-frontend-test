import { FunctionComponent } from 'react';

export type RouteProps = {
  component: FunctionComponent
  key: string;
  path: string;
  exact: boolean;
  isAuthenticated?: boolean;
}
