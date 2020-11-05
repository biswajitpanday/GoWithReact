import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './features/home/home';
import Login from './auth/login/login';
import Registration from './auth/registration/registration';
import ForgetPassword from './auth/forgetPassword/forgetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgetpassword" component={ForgetPassword}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
