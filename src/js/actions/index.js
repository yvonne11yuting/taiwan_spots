import axios from 'axios';
import { FILTER_SPOTS, REGISTER_MEMBER } from "../constants/action-types";
import { firebase } from '../firebase';

// export function getSpots(id = '') {
//   const url = `https://taiwanspots.firebaseio.com/info${id && '/'+id}.json`;
//   const request = axios.get(url);

//   return {
//     type: GET_SPOTS,
//     payload: request
//   };
// }

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