import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import spotsReducer from './reducer_spots';

const rootReducer = combineReducers({
  spots: spotsReducer,
  form: formReducer
});

export default rootReducer;