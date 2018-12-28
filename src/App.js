import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import NavBar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import DashBoard from "./components/dashboard/dashboard";
import CreateProfile from "./components/create-profile/createProfile";
import { login_success as setUser, logout } from "./store/actions/auth";
import { clear_current_profile } from "./store/actions/profile";
/*global localStorage */

class App extends Component {
  render() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      this.props.setUser(decoded);

      const currentTime = Date.now() / 1000;
      if (decoded < currentTime) {
        this.props.logout();
        this.props.clearProfile();
      }
    }
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={DashBoard} />
          </div>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: userData => dispatch(setUser(userData)),
    logout: () => dispatch(logout()),
    clearProfile: () => dispatch(clear_current_profile())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
