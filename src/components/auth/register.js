import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as auth from "../../store/actions/auth";
//import classnames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    //console.log(newUser);
    this.props.register(newUser);
  };

  render() {
    let redirect = null;
    let name_error = null;
    let email_error = null;
    let password_error = null;
    let password2_error = null;
    if (this.props.errors) {
      if (this.props.errors.name) name_error = this.props.errors.name;
      if (this.props.errors.email) email_error = this.props.errors.email;
      if (this.props.errors.password)
        password_error = this.props.errors.password;
      if (this.props.errors.password2)
        password2_error = this.props.errors.password2;
    }
    if (this.props.registered) {
      redirect = <Redirect to="/login" />;
    }

    return (
      <div className="register" style={{ height: "100vh" }}>
        {redirect}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your SocialConnect account
              </p>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInput}
                  error={name_error}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                  error={email_error}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  error={password_error}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.handleInput}
                  error={password2_error}
                />
                <input
                  type="submit"
                  className="btn bg-primary btn-info btn-block mt-4"
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
    errors: state.error.errors,
    registered: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: newUser => dispatch(auth.register(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
