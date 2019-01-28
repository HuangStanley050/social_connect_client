import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/spinner";
import PostForm from "./postform";

class Posts extends Component {
  render() {
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

export default Posts;
