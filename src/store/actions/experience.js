import axios from "axios";
import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";

export const add_experience = (data, history) => {
  return dispatch => {
    dispatch({ type: actionTypes.ADD_EXPERIENCE_START });
    //console.log(data);
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile/experience",
        data
      )
      .then(res => {
        //console.log(res.data);
        dispatch({
          type: actionTypes.ADD_EXPERIENCE_SUCCESS,
          payload: res.data
        });
        history.push("/dashboard");
      })
      .catch(err => {
        //console.log(err);
        dispatch(error(err.response.data));
      });
    //history.push("/dashboard");
  };
};

export const delete_experience = expID => {
  return dispatch => {
    //console.log(expID);
    dispatch({ type: actionTypes.DELETE_EXPERIENCE_START });
    axios
      .delete(
        `https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile/experience/${expID}`
      )
      .then(res => {
        //console.log(res);
        dispatch({
          type: actionTypes.DELETE_EXPERIENCE_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        //console.log(err);
        dispatch(error(err.response.data));
      });
    dispatch({ type: actionTypes.DELETE_EXPERIENCE_FAIL });
  };
};
