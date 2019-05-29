import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // get the current logged in user's id
  const { currentUser } = firebase.auth();

  // console.log(currentUser);
  // /users/userId/employees - referencing the structure of our data model
  // TO AVOID GETTING AN ERROR - redux thunk needs to return something, so we're tricking if by having it return our login function
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // type: reset  - changed the transition so that employeeList doesn't have a transition, the view stack 'resets' to employeeList
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: "reset" });
      });
  };
};

export const employeesFetch = () => {
  // get the current logged in user's id
  const { currentUser } = firebase.auth();
  return dispatch => {
    // this is persistent
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
