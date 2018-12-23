import React, { Component } from "react";
import { connect } from "react-redux";
import * as auth from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import classnames from "classnames";

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

    if (this.props.auth.isAuthenticated && this.props.auth.user) {
      redirect = <Redirect to="/dashboard" />;
    }

    return (
      <div className="login">
        {redirect}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": email_error
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                  />
                  {email_error ? (
                    <div className="invalid-feedback">{email_error}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": password_error
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                  />
                  {password_error ? (
                    <div className="invalid-feedback">{password_error}</div>
                  ) : null}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
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
