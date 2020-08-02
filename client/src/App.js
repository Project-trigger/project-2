import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"



class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Signup' component={Signup}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
        <Login />
        <Signup />
      </Switch>
    );
  }
}

export default App;
