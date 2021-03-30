import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from './types';

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logInSuccess = (payload) => ({ type: LOG_IN_SUCCESS, payload });
export const logInFailure = (payload) => ({ type: LOG_IN_FAILURE, payload });
export const logOut = () => ({ type: LOG_OUT });
