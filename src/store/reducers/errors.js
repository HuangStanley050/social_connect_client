import * as actionTypes from "../actions/actionTypes";

const initialState = {
  errors: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
