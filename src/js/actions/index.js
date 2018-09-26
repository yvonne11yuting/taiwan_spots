import axios from 'axios';
import { FILTER_SPOTS } from "../constants/action-types";

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
