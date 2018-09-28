import axios from 'axios';
import { FETCH_SPOTS, UPDATE_START_AT, FILTER_SPOTS, REGISTER_MEMBER, SHOW_SIGN_IN } from "../constants/action-types";

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

export function registerMember({email, pwd, type}, callback) {
  const request = type === "register" ?
  firebase.auth()
    .createUserWithEmailAndPassword(email, pwd)
    .then(res => { callback(type, res)})
    .catch(err => { callback(type, err)})
  :
  firebase.auth()
    .signInWithEmailAndPassword(email, pwd)
    .then((res) => { callback(type, res)})
    .catch(err => { callback(type, err)})

  return {
    type: REGISTER_MEMBER,
    payload: request
  };
}

export function showSignIn(flag) {
  return {
    type: SHOW_SIGN_IN,
    payload: flag
  }
}