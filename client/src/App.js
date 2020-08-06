import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Debate from './pages/Debate/Debate';
import NewDebates from './pages/NewDebates/NewDebates';
// import Trending from './pages/Trending/Trending';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbars from "./components/Navbars";
import Profile from "./components/Profile";
// import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

const App = () => {


  return (
    <div id="app" className="d-flex flex-column h-100">
      <Navbar />
      {/* <Navbars /> */}
      {/* <Container className="flex-grow-1 mt-5"> */}
      <Switch>
        <Route exact path="/profile" component={Profile} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route exact path="/" component={Debate} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/debate" component={Debate} />
        <Route exact path="/newdebates" component={NewDebates} />
      </Switch>
      {/* </Container> */}

    </div>
  );
};

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <main>
//           <Route exact path="/" component={Debate} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/account" component={Account} />
//           <Route exact path="/debate" component={Debate} />
//           {/* <Route exact path="/newdebates" component={NewDebates} />
//           <Route exact path="/trending" component={Trending} /> */}
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
