<<<<<<< HEAD
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
=======
import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Debate from './pages/Debate/Debate';
import NewDebates from './pages/NewDebates/NewDebates';
import Trending from './pages/Trending/Trending';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Route exact path="/" component={Debate} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/debate" component={Debate} />
          <Route exact path="/newdebates" component={NewDebates} />
          <Route exact path="/trending" component={Trending} />
        </main>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> a4f7018a63d92525dc2eced12dea5b4c97237cb9
