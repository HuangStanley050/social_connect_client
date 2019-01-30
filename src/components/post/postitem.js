import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { delete_post } from "../../store/actions/post";
import { Link } from "react-router-dom";

const PostItem = props => {
  const onDeletePost = postId => {
    props.deletePost(postId);
  };
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-2">
          <Link to={`/profile/${props.post.name}`}>
            <img
              className="rounded-circle d-none d-md-block"
              src={props.post.avatar}
              alt=""
            />
          </Link>
          <br />
          <p className="text-center">{props.post.name}</p>
        </div>
        <div className="col-md-10">
          <p className="lead">{props.post.text}</p>
          <button type="button" className="btn btn-light mr-1">
            <i className="text-info fas fa-thumbs-up" />
            <span className="badge badge-light">{props.post.likes.length}</span>
          </button>
          <button type="button" className="btn btn-light mr-1">
            <i className="text-secondary fas fa-thumbs-down" />
          </button>
          <Link to={`/post/${props.post._id}`} className="btn btn-info mr-1">
            Comments
          </Link>
          {props.auth.user.id === props.post.user ? (
            <button
              onClick={() => onDeletePost(props.post._id)}
              type="button"
              className="btn btn-danger mr-1"
            >
              <i className="fas fa-times" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: postId => dispatch(delete_post(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
