import React, { Component } from 'react';
import './App.css';
import Posts from '../Posts/Posts'


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          title: 'First Post',
          author: 'Johnny B',
          content: 'Do the monkey',
          score: 0
        }
      ]
    }
  }

  changeScore = (change, id) => {
    const shallowPosts = [...this.state.posts]
    const postToChange = shallowPosts.find(post => post.id === id);
    postToChange.score += change;
    this.setState({ posts: shallowPosts});

  }

  render() {
    return (
      <>
        <h1 className="heading">PostIt</h1>
        <Posts changeScore={this.changeScore} posts={this.state.posts} />
      </>
    );
  }

}

export default App;
