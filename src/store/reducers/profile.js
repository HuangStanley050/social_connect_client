import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...action.payload },
        loading: false
      };
    case actionTypes.CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: {},
        loading: false
      };
    case actionTypes.GET_PROFILE_FAIL:
      return {
        ...state,
        profile: null,
        loading: false
      };
    case actionTypes.CREATE_PROFILE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CREATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: { ...action.payload }
      };
    case actionTypes.DELETE_PROFILE_START:
      //console.log("delet your profile and account");
      return {
        ...state,
        loading: true
      };
    case actionTypes.DELETE_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.ADD_EXPERIENCE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.ADD_EXPERIENCE_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: { ...action.payload }
      };
    case actionTypes.ADD_EDUCATION_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.ADD_EDUCATION_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.ADD_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: { ...action.payload }
      };
    case actionTypes.DELETE_EXPERIENCE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DELETE_EXPERIENCE_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: { ...action.payload }
      };
    case actionTypes.DELETE_EDUCATION_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DELETE_EDUCATION_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.DELETE_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: { ...action.payload }
      };
    case actionTypes.GET_PROFILES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_PROFILES_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.GET_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        profiles: [...action.payload]
      };
    case actionTypes.GET_PROFILE_HANDLE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_PROFILE_HANDLE_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
