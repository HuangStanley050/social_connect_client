import axios from "axios";
import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";

export const add_education = (data, history) => {
  return dispatch => {
    dispatch({ type: actionTypes.ADD_EDUCATION_START });
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile/education",
        data
      )
      .then(res => {
        //console.log(res);
        dispatch({
          type: actionTypes.ADD_EDUCATION_SUCCESS,
          payload: res.data
        });
        history.push("/dashboard");
      })
      .catch(err => {
        //console.log(err);
        dispatch(error(err.response.data));
      });
  };
};

export const delete_education = eduID => {
  return dispatch => {
    //console.log(eduID);
    dispatch({ type: actionTypes.DELETE_EDUCATION_START });
    axios
      .delete(
        `https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile/education/${eduID}`
      )
      .then(res => {
        dispatch({
          type: actionTypes.DELETE_EDUCATION_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch(error(err.response.data));
      });
  };
};
