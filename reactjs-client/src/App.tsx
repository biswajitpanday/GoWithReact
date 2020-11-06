import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ForgetPassword from './features/auth/forgetPassword/forgetPassword';
import Login from './features/auth/login/login';
import Registration from './features/auth/registration/registration';
import Home from './features/home/home';


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
