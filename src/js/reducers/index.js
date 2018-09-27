import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import spotsReducer from './reducer_spots';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
  spots: spotsReducer,
  form: formReducer,
  user: userReducer
});

export default rootReducer;