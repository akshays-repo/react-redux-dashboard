import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { withRouter } from 'react-router';
import { store } from '../reducers/configureStore';

const loadable = loader => React.lazy(loader); 

const routes = [
  {
    path: '/card',
    component: loadable(() => import('../pages/cardsection')),
    exact: true,
    authorize: false,
  },
  {
    path: '/chartone',
    component: loadable(() => import('../pages/chartone/index')),
    exact: true,
    authorize: false,
  },  {
    path: '/chartwo',
    component: loadable(() => import('../pages/chartwo')),
    exact: true,
    authorize: false,
  },  {
    path: '/',
    component: loadable(() => import('../pages/profilesection')),
    exact: true,
    authorize: false,
  },
];

const Router = props => {
  return (
    <Switch>
      {routes.map(route => {
        if (route.authorize) {
          return (
            <PrivateRoute
              authorized={store.getState().Login.isLogin}
              key={route.path}
              keys={route.path}
              exact={route.exact}
              {...route}
              {...props}
            />
          );
        } else {
          return (
            <PublicRoute
              {...props}
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
              header={route.header}
              footer={route.footer}
              header={route.header || true}
            />
          );
        }
      })}

      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  );
};

export default withRouter(Router);
