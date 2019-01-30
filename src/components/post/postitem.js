import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

const PostItem = props => {
  return null;
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PostItem);
