import React from "react";

const Comment = ({ content, id }) => {
  return (
    <article data-postid={id}>
      <p>{content}</p>
    </article>
  );
};

export default Comment;
