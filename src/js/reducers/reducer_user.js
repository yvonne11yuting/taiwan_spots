import {
  SHOW_SIGN_IN,
  USER_SIGN_IN,
  USER_REGISTER,
  USER_SIGN_OUT,
  FETCH_USER
} from '../constants/action-types';

const initialState = {
  showSignIn: false,
  info: { email: null, uid: null }
}

export default function(state = initialState, action) {

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
          uid: action.user.uid ,
          email: action.user.email
        }
      }

    case USER_SIGN_OUT:
      return {
        ...state,
        info: { uid: null, email: null }
      }

    case FETCH_USER:
      let info = action.user ? {
        uid: action.user.uid,
        email: action.user.email
      } : {
        uid: null, email: null
      }
      return { ...state, info }

    case SHOW_SIGN_IN:
      return { ...state, showSignIn: action.payload };
  }
  return state;
}