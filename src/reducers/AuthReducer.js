import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // if you want redux to update the state, you have to return a new object
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      // if you want redux to update the state, you have to return a new object
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case LOGIN_USER_SUCCESS:
      // console.log(action.payload.user);
      // if you want redux to update the state, you have to return a new object
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload.user
      };
    case LOGIN_USER_FAIL:
      // if you want redux to update the state, you have to return a new object
      return {
        ...state,
        error: "Error!  Please check spelling and try again.",
        password: "",
        email: "",
        loading: false
      };

    default:
      return state;
  }
};
