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
import { login_success as setUser, logout } from "./store/actions/auth";
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
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
