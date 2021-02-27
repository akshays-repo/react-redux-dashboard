import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { message, notification } from 'antd';

export const PrivateRoute = ({ authorized, component: Component, path, keys, exact, history }) => {
  const [scroll, setscroll] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 80,
      left: 100,
      behavior: 'smooth',
    });
  }, [scroll]);
  return (
    <Route
      path={path}
      key={keys}
      exact={exact}
      render={props => {
        if (authorized) {
          return (
            <div
              className="main_container"
              style={{
                width: '100%',
                overflowX: 'hidden',
              }}
            >
              <div>
                <Component {...props} />
              </div>
            </div>
          );
        } else {
          history.push('/login');
        }
      }}
    />
  );
};
