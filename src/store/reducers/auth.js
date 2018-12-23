import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {}
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
        isAuthenticated: true,
        loading: false
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
