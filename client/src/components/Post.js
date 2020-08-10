import React, { Component } from 'react';
import axios from "axios"




class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: '',
      incumbent_body: '',
      challenger_body: ''
    }
  }

  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault(
      console.log(this.state)
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text"
              name="topic"
              value={this.props.topic}
              onChange={this.ChangeHandler}
            />
          </div>
          <div>
            <input type="text"
              name="incumbent_body"
              value={this.props.incumbent_body}
              onChange={this.ChangeHandler}
            />
          </div>
          <div>
            <input type="text"
              name="challenger_body"
              value={this.props.challenger_body}
              onChange={this.ChangeHandler}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    )
  }
}

export default Post;