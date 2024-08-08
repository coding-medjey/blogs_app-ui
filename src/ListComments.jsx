/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(({ id, content }) => {
          return <li key={id}>{content}</li>;
        })}
      </ul>
    </div>
  );
};
