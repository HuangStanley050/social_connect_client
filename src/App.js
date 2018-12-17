import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>react app</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
