import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import { Image } from "react-bulma-components";

function PostContainer(props) {
  const data = props.data;
  return (
    <div className="post">
      {data.username}<br />
      <Image src={data.imageUrl} alt={`${data.username}'s post`} /><br />
      Comments:
      <CommentSection comments={data.comments} />
    </div>
  );
}

export default PostContainer;
