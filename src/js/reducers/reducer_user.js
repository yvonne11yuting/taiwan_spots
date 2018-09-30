import { SHOW_SIGN_IN, USER_SIGN_IN, USER_REGISTER } from '../constants/action-types';

export default function(state = {
  showSignIn: false,
  info: { email: null, uid: null }
}, action) {

  switch(action.type) {
    case USER_SIGN_IN:
    case USER_REGISTER:
      return action.err ? {
        ...state,
        errType: action.type,
        showSignIn: true
      } : {
        ...state,
        errType: '',
        info: {
          email: action.user.email,
          uid: action.user.uid
        }
      }

    case SHOW_SIGN_IN:
      return { ...state, showSignIn: action.payload };
  }
  return state;
}