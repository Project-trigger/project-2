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

  // handlechange

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  //handlesubmit

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.email} ${this.state.password_KEY}`);

    // call to the api that crate the user the table

    this.setState({
      email: "",
      password_KEY: ""
    });
  };

  render() {
    const { Signup } = this.state;

    return (
      <div>
        <Navbar />
        <Header />

        <form className="appBody">
          <div className="email">
            <label>Email:</label>
            <input type="text" name="email" />
          </div>

          <div className="password_KEY">
            <label>Password:</label>
            <input type="text" name="password" />
          </div>

          <div className="submitBt">
            <input type="submit" name="Submit" />
          </div>
          <button onClick={this.handleSubmit} type="submit" class="btn btn-default">Sign Up</button>

        </form>
      </div>
    )
  }
}

export default Signup
