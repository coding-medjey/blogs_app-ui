/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

export default ({ posts, setIsFetch }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div className="d-flex flex-row,flex-wrap justify-content-between">
        {posts.map((post) => {
          return (
            <div
              className="card"
              style={{ margin: "30px", width: "30%" }}
              key={post["data"].id}
            >
              <div className="card-body">
                <h4>{post["data"].title}</h4>
              </div>
              <div>
                <hr />
                <ListComments comments={post.comments} />
                <hr />
                <CreateComment setIsFetch={setIsFetch} postId={post.id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
