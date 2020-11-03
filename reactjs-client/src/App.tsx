import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './features/login/login';
import Home from './features/home/home';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <BrowserRouter>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
