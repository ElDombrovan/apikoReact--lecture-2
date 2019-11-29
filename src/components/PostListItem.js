import React from "react";

function PostListItem({ title, body }) {
  return (
    <div className="post-list--item">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostListItem;
