import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";

function PostContainer(props) {
  const data = props.data;
  return (
    <div className="post">
      {data.username}<br />
      <img src={data.imageUrl} alt="post image"/><br />
      Comments:
      <CommentSection comments={data.comments} />
    </div>
  );
}

export default PostContainer;
