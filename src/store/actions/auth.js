import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";
import axios from "axios";

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

export const registerFail = () => {
  return {
    type: actionTypes.REGISTER_FAIL
  };
};
