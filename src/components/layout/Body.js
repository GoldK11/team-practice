import React from 'react';
import Router from 'src/assets/js/router';
import { Route, Switch, Redirect } from 'react-router-dom';
import Background from './Background';
// import CONST from 'src/assets/js/const';

function Body() {
  const loggedIn = true;

  const renderFunc = ob => {
    return ob.meta.authorization && !loggedIn ? (
      <Redirect to={ob.meta.redirect} />
    ) : (
      <ob.component />
    );
  };

  return (
    <div className="Body">
      <Background />
      <div className="Page">
        <Switch>
          {Router.map(ob => (
            <Route
              key={ob.index}
              exact
              path={ob.path}
              render={() => renderFunc(ob)}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Body;
