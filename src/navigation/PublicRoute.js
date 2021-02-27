import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({ component: Component, path, keys, exact, header }) => {
  return (
    <Route
      path={path}
      key={keys}
      exact={exact}
      render={props => {
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
      }}
    />
  );
};
