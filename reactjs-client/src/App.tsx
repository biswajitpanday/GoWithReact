import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ForgetPassword from './features/auth/forgetPassword/forgetPassword';
import Home from './features/home/home';
import { history } from './helpers/rootStore';
import { Login } from './features/auth/login/login';
import { Registration } from './features/auth/registration/registration';


function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgetpassword" component={ForgetPassword}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
