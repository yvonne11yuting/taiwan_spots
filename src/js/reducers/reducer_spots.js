import { GET_SPOTS, FILTER_SPOTS } from '../constants/action-types';
import all from '../../db.json';

export default function(state = { all }, action) {
  switch(action.type) {
    // case GET_SPOTS:
    //   return { ...state, all: action.payload.data };

    case FILTER_SPOTS:
      return { ...state, filterResult: action.payload }
  }
  return state;
}