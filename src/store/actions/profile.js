import axios from "axios";
import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";

export const fetch_profile_start = () => {
  return {
    type: actionTypes.GET_PROFILE_START
  };
};

export const fetch_profile_fail = () => {
  return {
    type: actionTypes.GET_PROFILE_FAIL
  };
};

export const fetch_profile_success = profile => {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: profile
  };
};

export const clear_current_profile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  };
};

export const fetch_profile = () => {
  return dispatch => {
    dispatch(fetch_profile_start());
    axios
      .get(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile"
      )
      .then(res => {
        dispatch(fetch_profile_success(res.data));
      })
      .catch(err => {
        dispatch(error(err.response.data));
        console.log(err.response);
        if (err.response.status === 401) {
          //not authorized
          dispatch(fetch_profile_fail());
        } else if (err.response.status === 404) {
          //not able to find the profile but user is authenticated
          dispatch(clear_current_profile());
        }
      });
  };
};
