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

  handleSignup(event) {
    event.preventDefault();

    if (
      this.state.usernameInput === "" ||
      this.state.passwordInput === "" ||
      this.state.passwordConfirmInput === ""
    ) {
      this.setState({ errorMessage: "All fields must be populated" });
    } else if (this.state.passwordInput !== this.state.passwordConfirmInput) {
      this.setState({
        errorMessage: "password input must match password confirm",
      });
    } else {
      fetch("http://127.0.0.1:5000/user/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.usernameInput,
          password: this.state.passwordInput,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          if (data === "Username Unavailable") {
            this.setState({ errorMessage: "Username Unavailable" });
          } else {
            this.setState({ errorMessage: "none" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errorMessage: "fetch error" });
        });
    }
  }

  handleClick() {
    this.setState({
      authMethod: this.state.authMethod === "login" ? "signup" : "login",
      errorMessage: "none",
      usernameInput: "",
      passwordInput: "",
      passwordConfirmInput: "",
    });
  }

  render() {
    return (
      <div className="auth-wrapper">
        {this.state.authMethod === "login" ? (
          <Login
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            usernameInput={this.state.usernameInput}
            passwordInput={this.state.passwordInput}
            errorMessage={this.state.errorMessage}
            handleClick={this.handleClick}
          />
        ) : (
          <Signup
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            usernameInput={this.state.usernameInput}
            passwordInput={this.state.passwordInput}
            errorMessage={this.state.errorMessage}
            handleClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}
