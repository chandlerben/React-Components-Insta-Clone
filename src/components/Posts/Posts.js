import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map((currentPost) => {
        return <Post post={currentPost} likePost={likePost} />
      })}
      {/* map through the posts here to return a Post component */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
