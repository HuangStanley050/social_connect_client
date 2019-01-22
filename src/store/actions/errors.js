import * as actionTypes from "./actionTypes";

export const error = err => {
  return {
    type: actionTypes.ERROR,
    payload: err
  };
};

export const clear_error = () => {
  return {
    type: actionTypes.CLEAR_ERROR
  };
};
