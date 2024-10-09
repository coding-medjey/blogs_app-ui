/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import PostsCreate from "./PostsCreate";
import Posts from "./Posts";

export default () => {
  const [posts, setPosts] = useState([]);
  const [isFetch, setIsFetch] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://posts.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setPosts(Object.values(data));
        console.log(data);
      } else {
        throw new Error("No data returned");
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };
  if (isFetch) {
    fetchPosts();
    setIsFetch(false);
  }

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostsCreate setIsFetch={setIsFetch} />
      <hr />
      <Posts posts={posts} setIsFetch={setIsFetch} />
    </div>
  );
};
