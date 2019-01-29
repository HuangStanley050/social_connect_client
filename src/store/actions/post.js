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

export const add_post = postData => {
  return dispatch => {
    dispatch(post_loading());
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/posts",
        postData
      )
      .then(res => {
        dispatch(add_post_success(res.data));
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
        dispatch(error(err.response.data.text));
        dispatch(add_post_fail());
      });
  };
};
