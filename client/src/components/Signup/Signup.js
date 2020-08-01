import React, { Component } from 'react';
import Navbar from "../Navbar";
import Header from "../Header";
import "./Signup.css"

class Signup extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getSignUp();
  }

  getSignUp = () => {
    fetch('/api/getSignUp')
      .then(res => res.json())
      .then(Signup => this.setState({ Signup }))
  }

  render() {
    const { Signup } = this.state;

    return (
      <div>
        <Navbar />
        <Header />

        <form className="appBody">
          <div className="emailInput">
            <label>Email:</label>
            <input type="text" name="email" />
          </div>

          <div className="passwordInput">
            <label>Password:</label>
            <input type="text" name="password" />
          </div>

          <div className="submitBt">
            <input type="submit" name="Submit" />
          </div>
          <button type="submit" class="btn btn-default">Sign Up</button>

        </form>
      </div>
    )
  }
}

export default Signup
