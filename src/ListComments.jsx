/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(({ id, status, content }) => {
          if (status === "rejected") {
            content = "This Content has been removed";
          } else if (status === "pending") {
            content = "This comment has been awaiting for moderation";
          }
          return <li key={id}>{content}</li>;
        })}
      </ul>
    </div>
  );
};
