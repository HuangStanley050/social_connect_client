import React, { Component } from "react";
import { connect } from "react-redux";
import * as auth from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
//import classnames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = { email: this.state.email, password: this.state.password };
    //console.log(user);
    this.props.login(user);
  };
  render() {
    let email_error = null;
    let password_error = null;
    let redirect = null;

    if (this.props.errors) {
      if (this.props.errors.email) email_error = this.props.errors.email;
      if (this.props.errors.password)
        password_error = this.props.errors.password;

      //console.log(password_error, email_error);
    }

    if (
      this.props.auth.isAuthenticated &&
      Object.keys(this.props.auth.user).length !== 0
    ) {
      redirect = <Redirect to="/dashboard" />;
    }

    return (
      <div className="login" style={{ height: "100vh" }}>
        {redirect}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                  error={email_error}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  error={password_error}
                />

                <input
                  type="submit"
                  className="btn btn-info bg-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.error.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch(auth.login(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
