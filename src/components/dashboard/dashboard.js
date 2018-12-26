import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_profile } from "../../store/actions/profile";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    return <h1>DashBoard</h1>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(fetch_profile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
