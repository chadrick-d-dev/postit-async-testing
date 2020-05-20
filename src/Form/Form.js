import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      error: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.author || !this.state.content) {
      this.setState({ error: "Please fill out the whole form" });
      return;
    }
    const newPost = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content,
      id: Date.now(),
      score: 0,
      comments: []
    };
    this.props.addPost(newPost);
    this.setState({
      title: "",
      author: "",
      content: "",
      error: ""
    });
  };

  render() {
    return (
      <form>
        <h2 className="form-heading">Make a Post:</h2>
        {this.state.error}
        <div className="input-wrapper">
          <input
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input
            name="content"
            placeholder="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Add Post</button>
      </form>
    );
  }
}

export default Form;
