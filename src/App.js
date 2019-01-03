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
import EditProfile from "./components/edit-profile/edit-profile";
import AddExperience from "./components/credentials/addexperience";
import { login_success as setUser, logout } from "./store/actions/auth";
import { clear_current_profile } from "./store/actions/profile";
/*global localStorage */

class App extends Component {
  /*componentDidUpdate(prevProps) {
    console.log("App updating!");
    console.log(prevProps);
  }*/
  /*static getDerivedStateFromProps(nextProps) {
    console.log("App next props is---> ", nextProps);
    //console.log(nextProps);
  }*/

  componentDidMount() {
    console.log("App mounted ", this.props);
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
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/create-profile" component={CreateProfile} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/edit-profile" component={EditProfile} />
            <Route path="/add-experience" component={AddExperience} />
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.profile,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
