import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import {
  Card,
  Image,
  CardContent,
  MediaLeft,
  Content,
  CardHeaderTitle,
  MediaRight,
  Media,
  MediaContent,
  Title,
  Field,
  Label,
  Control,
  Input
} from "bloomer";
import Bulma from "bulma";
import PropTypes from "prop-types";

function PostContainer(props) {
  const data = props.data;
  return (
    <Card>
      <Image src={data.imageUrl} alt={`${data.username}'s post`} />
      <br />
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize="64x64" src={data.thumbnailUrl} />
          </MediaLeft>
          <MediaRight>
            <MediaContent>
              <Title isSize={5}>{data.username}</Title>
            </MediaContent>
          </MediaRight>
        </Media>

        <Content>
          Comments:
          <CommentSection comments={data.comments} />
          <br />
          <time dateTime={data.timestamp}>{data.timestamp}</time>
        </Content>
      </CardContent>
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
};

export default PostContainer;
