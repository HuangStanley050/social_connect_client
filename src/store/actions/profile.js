import axios from "axios";
import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";

//==============fetching profile=============//
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
//=======================================================//

//creat profile===========================================//
export const create_profile_start = () => {
  return {
    type: actionTypes.CREATE_PROFILE_START
  };
};

export const create_profile_fail = () => {
  return {
    type: actionTypes.CREATE_PROFILE_FAIL
  };
};

export const create_profile_success = profile => {
  return {
    type: actionTypes.CREATE_PROFILE_SUCCESS,
    payload: profile
  };
};
//=========================================================

export const clear_current_profile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  };
};

//========================async functions for fetch and create

export const create_profile = data => {
  return dispatch => {
    dispatch(create_profile_start());
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile",
        data
      )
      .then(res => console.log(res))
      .catch(err => {
        console.log(data);
        console.log(err.response);
        dispatch(error(err.response.data));
        dispatch(create_profile_fail());
      });
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

//===================================
