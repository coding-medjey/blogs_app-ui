/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { useState } from "react";

export default ({ setIsFetch }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = async () => {
    await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    })
      .then((resp) => {
        setIsFetch(true);
        setTitle("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
