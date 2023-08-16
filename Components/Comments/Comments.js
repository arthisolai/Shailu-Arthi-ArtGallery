import React from "react";

export default function Comments({ comments }) {
  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((commentObj, index) => (
          <li key={index}>
            {commentObj.comment} ({commentObj.date})
          </li>
        ))}
      </ul>
    </div>
  );
}
