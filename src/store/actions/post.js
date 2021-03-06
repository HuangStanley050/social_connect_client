import axios from "axios";
import * as actionTypes from "./actionTypes";
import { error } from "./errors";

export const post_loading = () => {
  return {
    type: actionTypes.POST_LOADING
  };
};

export const add_post_success = data => {
  return {
    type: actionTypes.ADD_POST,
    payload: data
  };
};

export const add_post_fail = () => {
  return {
    type: actionTypes.ADD_POST_FAIL
  };
};

export const delete_post = postId => {
  return dispatch => {
    axios
      .delete(`https://connect-social.herokuapp.com/api/posts/${postId}`)
      .then(res => {
        dispatch({ type: actionTypes.DELETE_POST, payload: postId });
      })
      .catch(err => {
        dispatch(error(err.response.data.text));
        dispatch({ type: actionTypes.DELETE_POST_FAIL });
      });
  };
};

export const like_post = postId => {
  return dispatch => {
    console.log(postId);
    axios
      .post(`https://connect-social.herokuapp.com/api/posts/like/${postId}`)
      .then(res => dispatch(get_posts()))
      .catch(err => dispatch(error(err.response.data.text)));
  };
};

export const unlike_post = postId => {
  return dispatch => {
    axios
      .post(`https://connect-social.herokuapp.com/api/posts/unlike/${postId}`)
      .then(res => dispatch(get_posts()))
      .catch(err => dispatch(error(err.response.data.text)));
  };
};

export const add_post = postData => {
  return dispatch => {
    dispatch(post_loading());
    axios
      .post("https://connect-social.herokuapp.com/api/posts", postData)
      .then(res => {
        dispatch(add_post_success(res.data));
        dispatch({ type: actionTypes.CLEAR_ERROR });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
        dispatch(error(err.response.data.text));
        dispatch(add_post_fail());
      });
  };
};

export const get_posts = () => {
  return dispatch => {
    dispatch(post_loading());
    axios
      .get("https://connect-social.herokuapp.com/api/posts")
      .then(res => {
        dispatch({ type: actionTypes.GET_POSTS, payload: res.data });
        //console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
        dispatch(error(err.response.data.text));
        dispatch({ type: actionTypes.GET_POSTS_FAIL });
      });
  };
};

export const get_post = postId => {
  return dispatch => {
    dispatch(post_loading());
    axios
      .get(`https://connect-social.herokuapp.com/api/posts/${postId}`)
      .then(res => {
        dispatch({ type: actionTypes.GET_POST, payload: res.data });
        //console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
        dispatch(error(err.response.data.text));
        dispatch({ type: actionTypes.GET_POST_FAIL });
      });
  };
};

export const add_comment = (postId, comment) => {
  return dispatch => {
    // console.log("this is the comment " + comment.text + postId);
    //dispatch(post_loading());
    axios
      .post(
        `https://connect-social.herokuapp.com/api/posts/comment/${postId}`,
        comment
      )
      .then(res => {
        dispatch({ type: actionTypes.GET_POST, payload: res.data });
        dispatch({ type: actionTypes.CLEAR_ERROR });
        //console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
        dispatch(error(err.response.data.text));
        dispatch(add_post_fail());
      });
  };
};

export const delete_comment = (postId, commentId) => {
  return dispatch => {
    //console.log(postId, commentId);
    axios
      .delete(
        `https://connect-social.herokuapp.com/api/posts/comment/${postId}/${commentId}`
      )
      .then(res => {
        dispatch({ type: actionTypes.GET_POST, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch(error(err.response.data.text));
      });
  };
};
