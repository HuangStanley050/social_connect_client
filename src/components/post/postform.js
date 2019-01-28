import React, { Component } from "react";
import { connect } from "react-redux";
import TextAreaField from "../common/TextAreaField";

class PostForm extends Component {
  render() {
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Create a post"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
