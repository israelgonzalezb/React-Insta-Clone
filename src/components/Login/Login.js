import React from "react";

class Login extends React.Component {
  constructor(props){
    super(props);
  }
  
  login(){
    console.log("login clicked");
  }
  
  render(){
    return(
      <form>
       Username: <br />
        <input type="text" /> <br />
        Password: <br />
        <input type="password" /> <br />
        <button type="button" onClick={this.login}>Login</button>
      </form>
    )
  }
}

export default Login;