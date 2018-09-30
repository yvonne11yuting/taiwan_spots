import axios from 'axios';
import {
  FETCH_SPOTS,
  UPDATE_START_AT,
  FILTER_SPOTS,
  USER_SIGN_IN,
  USER_REGISTER,
  USER_SIGN_OUT,
  FETCH_USER,
  SHOW_SIGN_IN } from "../constants/action-types";
import { firebaseAuth } from '../../js/firebase';

export function fetchSpots(start, end) {
  const URL = `https://taiwanspots.firebaseio.com/origInfo.json?orderBy=%22index%22&startAt=${start}&endAt=${end}`
  const request = axios.get(URL);

  return {
    type: FETCH_SPOTS,
    payload: request
  };
}

export function updateStartAt(newStart) {
  return {
    type: UPDATE_START_AT,
    payload: newStart
  }
}

export function filterSpots(spots) {
  return {
    type: FILTER_SPOTS,
    payload: spots
  }
}

function actionSuccess({user}, actionType) {
  return {
    type: actionType,
    user
  };
}

function actionError(err, actionType) {
  return {
    type: actionType,
    err
  };
}

export function userSignIn({email, pwd}) {
  return function(dispatch) {
    firebaseAuth.signInWithEmailAndPassword(email, pwd)
      .then(res => {
        dispatch(actionSuccess(res, USER_SIGN_IN))
      })
      .catch(err => {
        dispatch(actionError(err, USER_SIGN_IN))
      })
  }
}

export function userRegister({email, pwd}) {
  return function(dispatch) {
    firebaseAuth.createUserWithEmailAndPassword(email, pwd)
      .then(res => {
        dispatch(actionSuccess(res, USER_REGISTER))
      })
      .catch(err => {
        dispatch(actionError(err, USER_REGISTER))
      })
  }
}

function checkUser(user) {
  return {
    type: FETCH_USER,
    user
  }
}

export function fetchUser() {
  return function(dispatch) {
    firebaseAuth.onAuthStateChanged(user => {
      dispatch(checkUser(user))
    })
  }
}

export function userSignOut() {
  const request = firebaseAuth.signOut();
  return {
    type: USER_SIGN_OUT,
    payload: request
  }
}

export function showSignIn(flag) {
  return {
    type: SHOW_SIGN_IN,
    payload: flag
  }
}