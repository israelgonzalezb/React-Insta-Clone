import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import { Image, Card, Media, Heading, Content } from "react-bulma-components";
import PropTypes from "prop-types";



function PostContainer(props) {
  const data = props.data;
  return (
    <Card>
      <Card.Image src={data.imageUrl} alt={`${data.username}'s post`} /><br />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={64} alt="64x64" src={data.thumbnailUrl} />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{data.username}</Heading>
          </Media.Item>
        </Media>
        <Content>
          Comments:
          <CommentSection comments={data.comments} />
          <br />
          <time dateTime={data.timestamp}>{data.timestamp}</time>
        </Content>
      </Card.Content>
      
    </Card>
  );
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
  
}

export default PostContainer;
