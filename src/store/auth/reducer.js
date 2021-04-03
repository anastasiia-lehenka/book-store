import { getUserData } from '../../services/localStorageApi';
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from './types';

const userData = getUserData();

const initialState = userData
  ? {
    token: userData.token,
    username: userData.username,
    avatar: userData.avatar,
    isLoading: false,
    error: '',
  }
  : {
    token: '',
    username: '',
    avatar: '',
    isLoading: false,
    error: '',
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case LOG_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: '',
      };

    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case LOG_OUT:
      return initialState;

    default: return state;
  }
};

export default reducer;
