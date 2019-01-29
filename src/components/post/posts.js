import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/spinner";
import PostForm from "./postform";

class Posts extends Component {
  render() {
    if (Object.keys(this.props.auth.user).length === 0) {
      this.props.history.push("/login");
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Posts);
