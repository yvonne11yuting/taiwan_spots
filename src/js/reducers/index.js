import { combineReducers } from 'redux';
import reducerSpots from './reducer_spots';

const rootReducer = combineReducers({
  spots: reducerSpots,
  // searchSuggestion: reducerSearchSuggestion
});

export default rootReducer;