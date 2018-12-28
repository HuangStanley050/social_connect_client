import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";
import { clear_current_profile, fetch_profile_fail } from "./profile";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
/* global localStorage */

export const registerStart = () => {
  //console.log("register");
  return {
    type: actionTypes.REGISTER_START
  };
};

export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS
  };
};

export const registerFail = () => {
  return {
    type: actionTypes.REGISTER_FAIL
  };
};

export const register = newUser => {
  return dispatch => {
    dispatch(registerStart());
    //console.log(newUser);
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/users/register",
        newUser
      )
      .then(res => dispatch(registerSuccess()))
      .catch(err => {
        console.log(err.response.data);
        dispatch(registerFail());
        dispatch(error(err.response.data));
      });
  };
};

export const login_start = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const login_fail = () => {
  return {
    type: actionTypes.LOGIN_FAIL
  };
};

export const login_success = userData => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userData
  };
};

export const login = userData => {
  return dispatch => {
    //console.log(userData);
    dispatch(login_start());
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/users/login",
        userData
      )
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        //console.log(decoded);
        dispatch(login_success(decoded));
      })
      .catch(err => {
        //console.log(err.response.data);
        dispatch(login_fail());
        dispatch(error(err.response.data));
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(login_fail());
    dispatch(fetch_profile_fail());
  };
};
