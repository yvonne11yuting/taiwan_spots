import axios from 'axios';
import { GET_SPOTS } from "../constants/action-types";

export function getSpots(id = '') {
  const url = `https://taiwanspots.firebaseio.com/Info${id && '/'+id}.json`;
  const request = axios.get(url);

  return {
    type: GET_SPOTS,
    payload: request
  }
}
