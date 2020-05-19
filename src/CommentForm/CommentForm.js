import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const id = Date.now();
    const comment = {
      id,
      content: this.state.input,
      parentPost: this.props.postId
    };
    console.log(id);
    this.props.addComment(comment);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.input}
          type="text"
          placeholder="Add Comment"
          onChange={this.onChange}
        />
        <button onClick={this.handleClick}>Add Comment</button>
      </form>
    );
  }
}

export default CommentForm;
