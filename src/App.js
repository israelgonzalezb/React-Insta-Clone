import React from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

function App() {
  return (
    <div>
    <SearchBar />
      {dummyData.map(post=><PostContainer data={post}/>)}
    </div>
  );
}

export default App;
