import React from "react";
/*import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostsPage from "./components/PostContainer/PostsPage.js";
import Bulma from "bulma";
import { Container, Section } from "bloomer";*/
import PostsPage from "./components/PostContainer/PostsPage.js";
import withAuthenticate from "./components/authentication/withAuthenticate.js";
import Login from "./components/Login/Login.js";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);



function App() {
  return <>
    <Login />
    <ComponentFromWithAuthenticate />
  </>;
}

export default App;
