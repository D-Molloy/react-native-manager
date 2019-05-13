import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(err => {
        console.log(err);
        // if the login failed, try to create the user
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          // if that failed, there was an error
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  // Actions is from react-native-router-flux
  //.employeeList is added to Actions object by the Router component reading the key
  Actions.employeeList();
};
