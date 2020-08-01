import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import Header from "../Header";
import "./Login.css"

class Login extends Component {
  render() {
  return (
    <div className="form">
      <Navbar />
      <Header />
      
        <div>
          <form className="appBody">
            <div className="input">
              <label>Email:</label>
              <input type="text" name="email" />
            </div>

            <div className="input">
              <label>Password:</label>
              <input type="text" name="password" />
            </div>

            <div className="submitBt">
              <input type="submit" name="Submit" />
            </div>
          </form>
        </div>
      
      <div className="footer">
        Not a member?
       
      <Link to={'/Signup'}>
      <button variant="raised">
          Create an Account
      </button>
      </Link>
      </div>
    </div>
  );
}
}

export default Login;
