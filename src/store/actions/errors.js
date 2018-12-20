import * as actionTypes from "./actionTypes";

export const error = err => {
  return {
    type: actionTypes.ERROR,
    payload: err
  };
};
