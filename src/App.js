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

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {loggedIn: false}
    
    this.login = this.login.bind(this);
  }
  
  login(name){
    if (localStorage.getItem("username")==="Izzy"){
      console.log("Hi Izzy");
    }else{
      localStorage.setItem('username', name);
      window.location.reload();
    }
  }
  render(){
  return (
    <>
    <ComponentFromWithAuthenticate loggedIn={this.props.loggedIn} login={this.login}/>
  </>
  )
  }
}

export default App;
