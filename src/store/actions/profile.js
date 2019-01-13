import axios from "axios";
import * as actionTypes from "./actionTypes.js";
import { error } from "./errors";
import setAuthToken from "../../utils/setAuthToken";
import { login_fail } from "./auth";
/*global localStorage */

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

//========================async functions for fetch, create and delete

export const create_profile = (data, history) => {
  return dispatch => {
    dispatch(create_profile_start());
    axios
      .post(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile",
        data
      )
      .then(res => {
        dispatch(create_profile_success(res.data));
        //console.log(history);
        history.push("/dashboard");
      })
      .catch(err => {
        //console.log(data);
        //console.log(err.response);
        dispatch(error(err.response.data));
        dispatch(create_profile_fail());
      });
  };
};

export const fetch_profiles = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_PROFILES_START });
    axios
      .get(
        "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile/all"
      )
      .then(res => {
        dispatch({
          type: actionTypes.GET_PROFILES_SUCCESS,
          payload: res.data
        });
        //console.log(res);
      })
      .catch(err => {
        dispatch(error(err.response.data));
        dispatch({ type: actionTypes.GET_PROFILES_FAIL });
        //console.log(err.response.data);
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

export const delete_account = () => {
  return dispatch => {
    if (window.confirm("Are you sure? This can't be undone.")) {
      dispatch({ type: actionTypes.DELETE_PROFILE_START });
      axios
        .delete(
          "https://github-site-practice-infamousgodhand.c9users.io:8081/api/profile"
        )
        .then(res => {
          console.log(res);
          localStorage.removeItem("jwtToken");
          setAuthToken(false);
          dispatch({ type: actionTypes.DELETE_PROFILE_SUCCESS });
          dispatch(login_fail());
          dispatch(fetch_profile_fail());
        })
        .catch(err => {
          dispatch(error(err.response.data));
          dispatch({ type: actionTypes.DELETE_PROFILE_FAIL });
        });
    }
  };
};

export const fetch_profile_handle = profileId => {};

//===================================
