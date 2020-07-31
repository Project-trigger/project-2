import React from "react";
import Navbar from "../Navbar";
import "./Login.css"

const Login = () => {



  return (
    <div className="form">
      <Navbar />
      <header className="appHeader">
        <h1>Triggered!!!</h1>
      </header>
      
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
        <a
          style={{ marginLeft: "10px", color: "#f77f00" }}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create an Account
        </a>
      </div>
    </div>
  );
};

export default Login;
