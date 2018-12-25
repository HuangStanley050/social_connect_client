import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

const Navbar = props => {
  const { isAuthenticated, user } = props.auth;

  const authLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" onClick={props.logout}>
          {Object.keys(user).length !== 0 ? (
            <img
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
              src={user.avatar}
              alt={user.name}
              title="You Must have a gravatar connected to your email account to display an image"
            />
          ) : null}
          Logout
        </NavLink>
      </li>
    </ul>
  );

  const guestLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Sign Up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/">
          SocialConnector
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="profiles.html">
                Developers
              </a>
            </li>
          </ul>
          {isAuthenticated && user ? authLink : guestLink}
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
