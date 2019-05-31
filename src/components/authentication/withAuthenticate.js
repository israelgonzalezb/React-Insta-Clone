import React from "react";

const withAuthenticate = WrappedComponent => GateComponent =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state = {loggedIn: props.loggedIn};
    }
    render() {
        if (this.state.loggedIn===true){
          return (
          <WrappedComponent />
            )
      }else{
        return(
        <GateComponent login={this.props.login}/>
          )
      }
    }
  };

export default withAuthenticate;
