import React, { Component } from "react";
import "./App.css";
import MainView from "../MainView/MainView";
import { Route, Link } from "react-router-dom";
import PostView from "../PostView/PostView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          title: "First Post",
          author: "Johnny B",
          content: "Do the monkey",
          score: 0,
          comments: [
            {
              content: "First!",
              id: 11,
              parentPost: 1
            },
            {
              content: "Second!",
              id: 12,
              parentPost: 1
            },
            {
              content: "Last :(!",
              id: 13,
              parentPost: 1
            }
          ]
        },
        {
          id: 2,
          title: "I think it hailed yesterday",
          author: "Some Fella",
          content: "It was wild stuff",
          score: 0,
          comments: [
            {
              content: "I saw it too!",
              id: 154,
              parentPost: 2
            },
            {
              content: "I don't believe in hail",
              id: 12345232,
              parentPost: 2
            }
          ]
        }
      ]
    };
  }

  addComment = comment => {
    const postsCopy = [...this.state.posts];
    const { parentPost } = comment;
    postsCopy.find(post => post.id === parentPost).comments.push(comment);
    this.setState({ posts: postsCopy });
  };

  changeScore = (change, id) => {
    const shallowPosts = [...this.state.posts];
    const postToChange = shallowPosts.find(post => post.id === id);
    postToChange.score += change;
    this.setState({ posts: shallowPosts });
  };

  addPost = newPost => {
    this.setState({ posts: [...this.state.posts, newPost] });
  };

  render() {
    return (
      <>
        <h1 className="heading">
          <Link to="/">PostIt</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <MainView
              addPost={this.addPost}
              changeScore={this.changeScore}
              posts={this.state.posts}
            />
          )}
        />
        <Route
          exact
          path="/posts/:id"
          render={({ match }) => {
            // How can you get the :id from the url?
            console.log(match.params.id);
            //once we have the id, we can use it to find the correct post
            const postToRender = this.state.posts.find(
              post => post.id === parseInt(match.params.id)
            );
            return (
              <PostView
                post={postToRender}
                changeScore={this.changeScore}
                addComment={this.addComment}
              />
            );
          }}
        />
      </>
    );
  }
}

export default App;
