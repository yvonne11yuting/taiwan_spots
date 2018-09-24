import axios from 'axios';
import { GET_SPOTS, SEARCH_TERM } from "../constants/action-types";

export function getSpots(id = '') {
  const url = `https://taiwanspots.firebaseio.com/info${id && '/'+id}.json`;
  const request = axios.get(url);

  return {
    type: GET_SPOTS,
    payload: request
  };
}

export function searchTerm(term) {
  return {
    type: SEARCH_TERM,
    payload: term
  }
}
