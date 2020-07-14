import React, { Component } from "react";
import "./App.css";
import MainView from "../MainView/MainView";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import PostView from "../PostView/PostView";
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super();
    this.baseUrl = "https://post-it-server.herokuapp.com/api/v1"
    this.state = {
      posts: [
      ]
    };
  }

  componentDidMount = () => {
    fetch(`${this.baseUrl}/posts`)
      .then(res => {
        console.log(res)
        if(res.ok) {
          return res.json();
        }
      })
      .then(data =>{
        console.log(data);
        this.setState({posts: data.posts})
      })
      .catch(error => console.error(error));
  }

  addComment = comment => {
    const { parentPost, content } = comment;
    fetch(`${this.baseUrl}/posts/${parentPost}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content":content})
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(newPost => {
        const postsCopy = this.state.posts.reduce((newPosts, post) => {
          if (post.id === newPost.id) {
             newPosts.push(newPost)
          } else {
            newPosts.push(post)
          }
          return newPosts;
        },[])
        this.setState( { posts: postsCopy});
      })
      .catch(err => console.error(err))
  };

  changeScore = (change, id) => {
    const shallowPosts = [...this.state.posts];
    const postToChange = shallowPosts.find(post => post.id === id);
    postToChange.score += change;
    this.setState({ posts: shallowPosts });
  };

  addPost = newPost => {
    const stringifiedBody = JSON.stringify(newPost);
    fetch(`${this.baseUrl}/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: stringifiedBody
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong');
        } 
      })
      .then(postedPost => {
        this.setState({ posts: [...this.state.posts, postedPost] })
      })
      .catch(err => console.error(err));
    
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
              console.log(this.state.posts);
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
