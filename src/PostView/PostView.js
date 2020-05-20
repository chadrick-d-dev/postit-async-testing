import React from "react";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const PostView = ({ post, changeScore, addComment }) => {
  const { comments, id } = post;
  const commentsToRender = comments.map((comment, i) => <Comment {...comment} key={i} />);
  return (
    <>
      <Post {...post} changeScore={changeScore} />
      <h3>Add a comment</h3>
      <CommentForm postId={id} addComment={addComment} />
      <section className="comments">{commentsToRender}</section>
    </>
  );
};

export default PostView;
