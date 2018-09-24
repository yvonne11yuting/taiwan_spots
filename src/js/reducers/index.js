import { combineReducers } from 'redux';
import reducerSpots from './reducer_spots';

const rootReducer = combineReducers({
  spots: reducerSpots
});

export default rootReducer;