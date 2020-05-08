import React from 'react';
import pointing from './pointing.svg';
import './Post.css';

const Post = ({title, content, author, score, changeScore, id})=> {
  return (
    <article> 
      <h1 className="post-title">{title}</h1>
      <h2 className="post-author">by {author}</h2>
      <p className="post-content">{content}</p>
      <div class="score-display">
        <img src={pointing} className="up" alt="upvote-btn" onClick={() => changeScore(1, id)} />
        {score}
        <img src={pointing} className="down" alt="downvote-btn" onClick={() => changeScore(-1, id)}/>
      </div>
    </article>
  );
}

export default Post;
