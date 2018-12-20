import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticate: true,
        loading: false
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
