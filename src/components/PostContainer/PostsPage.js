import React from 'react';
import logo from "../../logo.svg";
import "../../App.css";
import dummyData from "../../dummy-data.js";
import PostContainer from "./PostContainer.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Bulma from "bulma";
import { Container, Section } from "bloomer";

function PostsPage () {
  return (
        <Section>
      <Container>
        <SearchBar />
      </Container>
      {dummyData.map(post => {
        return (
          <div>
            <PostContainer data={post} />
            <br />
          </div>
        );
      })}
    </Section>
  
  )
}

export default PostsPage;