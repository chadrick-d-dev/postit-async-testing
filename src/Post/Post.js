import React from "react";
//import pointing from "/pointing.svg";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ title, content, author, score, changeScore, id, comments }) => {
  return (
    <article>
      <h1 className="post-title">{title}</h1>
      <h2 className="post-author">by {author}</h2>
      <p className="post-content">{content}</p>
      <div className="score-display">
        <img
          src={'/pointing.svg'}
          className="up"
          alt="upvote-btn"
          onClick={() => changeScore(1, id)}
        />
        {score}
        <img
          src={'/pointing.svg'}
          className="down"
          alt="downvote-btn"
          onClick={() => changeScore(-1, id)}
        />
      </div>
      <Link to={`/posts/${id}`}>{comments.length} comment(s)</Link>
    </article>
  );
};

export default Post;
