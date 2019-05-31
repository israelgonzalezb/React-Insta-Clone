import React from "react";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: null
    }
    //this.login = this.login.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  changeHandler (e) {
    this.setState({username: e.target.value});
  }
  
  render(){
    let loggedIn = this.state.loggedIn;
    return(
        <form>
         Username: <br />
          <input type="text" onChange={this.changeHandler} /> <br />
          Password: <br />
          <input type="password" /> <br />
          <button type="button" onClick={()=>this.props.login(this.state.username)}>Login</button>
        </form>
    )
  }
}

export default Login;