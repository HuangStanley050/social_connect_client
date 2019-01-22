import * as actionTypes from "../actions/actionTypes";

const initialState = {
  errors: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        errors: null
      };
    case actionTypes.ERROR:
      //const clone = Object.assign({}, state);
      //clone.errors = action.payload;
      //console.log("dispatcing error");
      //console.log(action.payload);
      return {
        ...state,
        errors: action.payload
      };
    //return clone;
    default:
      return state;
  }
};

export default reducer;
