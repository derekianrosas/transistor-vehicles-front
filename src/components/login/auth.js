import React, { Component } from "react";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authMethod: "login",
      usernameInput: "",
      passwordInput: "",
      passwordConfirmInput: "",
      errorMessage: "none",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: "none",
    });
  }

  render() {
    return <div></div>;
  }
}
