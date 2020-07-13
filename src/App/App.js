import React, { Component } from "react";
import "./App.css";
import MainView from "../MainView/MainView";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import PostView from "../PostView/PostView";
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super();
    this.baseUlr = "https://post-it-server.herokuapp.com/api/v1"
    this.state = {
      posts: [
      ]
    };
  }

  componentDidMount = () => {
    fetch(`${this.baseUrl}/posts`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
      })
      .then(data =>{
        console.log(data);
        this.setState({posts: data})
      })
      .catch(error => console.error(error));
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
        <Switch>
          <Route
            exact
            path="/posts/:id"
            render={({ match }) => {
              //console.log(match.params.id)
              const postToRender = this.state.posts.find(
                post => post.id === parseInt(match.params.id)
              );
              //console.log(postToRender)
              return (
                <PostView
                  post={postToRender}
                  changeScore={this.changeScore}
                  addComment={this.addComment}
                />
              );
            }}
          />
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
            path="/error"
            render={() => <Error />}
          />
          <Redirect to="/error"/>
        </Switch>
      </>
    );
  }
}

export default App;
