import React from "react";
import "./Account.css";

const Account = () => {



  return (
    <div className="form">
      
      <header className="appHeader">
        <h1>Triggered</h1>
      </header>
      
        <div>
          <form className="appBody">

            <div className="input">
              <label>Username:</label>
              <input type="text" name="username" />
            </div>

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
      
      
      </div>
    
  );
};

export default Account;
