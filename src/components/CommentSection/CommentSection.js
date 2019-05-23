import React from "react";

function CommentSection(props) {
  const comments = props.comments;
  return <div>{comments.map(comment =>(
      <div>{comment.text}<br /></div>
      )
        
      )}
        </div>;
}

export default CommentSection;
