import React from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const MainView = ({ addPost, changeScore, posts }) => {
  return (
    <>
      <Form addPost={addPost} />
      <Posts changeScore={changeScore} posts={posts} />
    </>
  );
};

export default MainView;
