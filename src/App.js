/* 
Start here and work your way down the nested components.
Not all files in the project need code added.
Look at each file to see what props need to be passed.
*/
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";

import React, { useState } from "react";
import dummyData from "./dummy-data";
import "./App.css";

const App = () => {

  const [posts, setPosts] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [searchTerm, setSearchTerm] = useState("");

  const likePost = postId => {
    // This function is passed into nested components using props, to allow them to update application state.
    // It takes a post id as its only argument. The idea is to increase the 'likes' count of the post with the given `id`.
    // We will update the posts slice of state using `setPosts`, passing as the new state the invocation of `posts.map()`.
    // The callback passed into `posts.map()` performs the following logic:
    //  - if the `id` of the post matches `postId`, return a new post object containing an increased 'likes' count.
    //  - otherwise just return the post object unchanged.
    setPosts(posts.map((currentPost) => {
      if (currentPost.id == postId) {
        currentPost.likes += 1;
      }
      return currentPost
    }))
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts likePost={likePost} posts={posts} />
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
