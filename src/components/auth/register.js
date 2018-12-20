import React, { Component } from "react";
import { connect } from "react-redux";
import * as auth from "../../store/actions/auth";
import classnames from "classnames";

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
    console.log("name", name_error);
    console.log("email", email_error);
    console.log("password", password_error);
    console.log("password2", password2_error);
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your SocialConnect account
              </p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": name_error
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                  />
                  {name_error ? (
                    <div className="invalid-feedback">{name_error}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.handleInput}
                  />
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
    errors: state.error.errors
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
