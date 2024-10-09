/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default ({ postId, setIsFetch }) => {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://posts.com/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json)
      .then((res) => {
        setIsFetch(true);
        setContent("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
