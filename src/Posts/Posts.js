import React from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = props => {
  const postsToRender = props.posts.map( post => {
    return <Post {...post} changeScore={props.changeScore}/>
  });

  return (
    <section>
      {postsToRender}
    </section>
  );
};

export default Posts;
