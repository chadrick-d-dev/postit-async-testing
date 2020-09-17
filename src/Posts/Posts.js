import React from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = props => {
  console.log(props)
  const postsToRender = props.posts.map( (post, i) => {
    return <Post {...post} key={i} changeScore={props.changeScore}/>
  });

  return (
    <section>
      {postsToRender}
    </section>
  );
};

Posts.defaultProps = {
  posts: []
}

export default Posts;
