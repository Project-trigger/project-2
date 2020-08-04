import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Debate from "./pages/Debate/Debate";
// import NewDebates from './pages/NewDebates/NewDebates';
// import Trending from './pages/Trending/Trending';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import API from "./utils/api"

function App() {
  // const [user, setUser] = useState({})
  // const handleLogin = ()=>{
  //   API.logIn().then((res)=>{
  //     //call set
  //     //update state or hook with user info
  //   })
  // }

  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Route exact path="/" component={Debate} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/debate" component={Debate} />
          {/* <Route exact path="/newdebates" component={NewDebates} />
          <Route exact path="/trending" component={Trending} /> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
