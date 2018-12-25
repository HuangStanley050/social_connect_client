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

export const fetch_profile = () => {
  return dispatch => {};
};
