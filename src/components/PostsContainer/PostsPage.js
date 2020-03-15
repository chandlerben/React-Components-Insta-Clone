//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [posts] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {posts.map(p => (
        <Post key={p.imageUrl} dataFromParent={p} />
      ))}
    </div>
  );
};

export default PostsPage;

