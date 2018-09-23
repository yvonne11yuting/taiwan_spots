import { GET_SPOTS } from '../constants/action-types';

export default function(state = [], action) {
  switch(action.type) {
    case GET_SPOTS:
      return [...state, ...action.payload.data];
  }

  return state;
}