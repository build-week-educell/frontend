import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authenticated: false
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault(); //anytime you use on submit for a form

    const { username, password } = this.state;
    let user = { username, password };

    axios
      .post("https://educell.herokuapp.com/api/login", user, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token); // token saved to local storage
          console.log(response.data);
          //if registration is succesful which is this check, then redirect to log in.
          this.setState({
            authenticated: true
          });
        } else {
          throw new Error(); //error if something went wrong
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/add");
  };

  render() {
    if (this.state.authenticated === true) {
      // when log in works take them to students
      return <Redirect to="/students" />;
    }
    return (
      <div className="loginPage">
        <form onSubmit={this.login} className="loginForm">
          <h1 className="login">Login</h1>
          <input
            type="text"
            placeholder="enter email"
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
          />
          <input
            type="password"
            placeholder="enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
          />
          <div className="loginButton">
            <button
              onClick={this.login}
              className="waves-effect waves-light btn edit loginButton"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
