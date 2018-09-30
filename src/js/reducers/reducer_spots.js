import {
  FETCH_SPOTS,
  UPDATE_START_AT,
  FILTER_SPOTS,
  STORE_FAVORITE
} from '../constants/action-types';

export default function(state = {
  all: [],
  currentStart: 0
}, action) {
  switch(action.type) {
    case FETCH_SPOTS:
      let { data } = action.payload;
      let newAllAry = Object.keys(data).map(id => data[id]);
      let { all } = state;
      return { ...state, all: all.concat(newAllAry) };

    case UPDATE_START_AT:
      return { ...state, currentStart: action.payload };

    case FILTER_SPOTS:
      return { ...state, filterResult: action.payload };

    case STORE_FAVORITE:
      let favoriteList = {};
      console.log(action.spotId);
      favoriteList[action.uid] = [action.spotId];
      return { ...state, favoriteList}
  }
  return state;
}