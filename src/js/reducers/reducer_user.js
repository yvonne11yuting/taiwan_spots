import { SHOW_SIGN_IN } from '../constants/action-types';

export default function(state = { showSignIn: false }, action) {
  switch(action.type) {
    case SHOW_SIGN_IN:
      return { ...state, showSignIn: action.payload };
  }
  return state;
}