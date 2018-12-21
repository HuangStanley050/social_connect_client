import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

class App extends Component {
  render() {
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

export default App;
