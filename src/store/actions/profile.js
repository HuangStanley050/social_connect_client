import axios from "axios";
import * as actionTypes from "./actionTypes.js";

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
        //Object.keys(a).length > 0
        console.log(res);
        if (Object.keys(res.data).length === 0) {
          dispatch(clear_current_profile());
        } else {
          dispatch(fetch_profile_success(res.data));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(clear_current_profile());
      });
  };
};
