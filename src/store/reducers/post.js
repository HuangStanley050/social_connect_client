import * as actionTypes from "../actions/actionTypes";
const initialState = {
  posts: [],
  post: {},
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.ADD_POST_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
