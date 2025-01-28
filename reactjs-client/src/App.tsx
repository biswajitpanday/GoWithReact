import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { history } from "./helpers/rootStore";
import { AppRoutes } from "./helpers/appRoutes";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          {new AppRoutes().GetRoutes.map((route, i) => (
            <Route
              key={i}
              exact={route.subRoutes.some((r) => r.exact)}
              path={route.subRoutes.map((r) => r.path)}
            >
              <route.layout>
                {route.subRoutes.map((subRoute, i) => (
                  <Route key={i} {...subRoute} />
                ))}
              </route.layout>
            </Route>
          ))}
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
