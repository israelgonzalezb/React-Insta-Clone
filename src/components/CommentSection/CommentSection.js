import React from "react";
import PropTypes from "prop-types";
//import Bulma from "bulma";

function CommentSection(props) {
  const comments = props.comments;
  return (
    <div>
      {comments.map(comment => (
        <div>
          {comment.text}
          <br />
        </div>
      ))}
      <input type="text" />
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
