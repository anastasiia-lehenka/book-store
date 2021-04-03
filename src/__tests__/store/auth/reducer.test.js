import reducer from '../../../store/auth/reducer';
import * as types from '../../../store/auth/types';

describe('Auth reducer', () => {
  const initialState = {
    token: '',
    username: '',
    avatar: '',
    isLoading: false,
    error: '',
  };

  const state = {
    token: 'zoizgzznlxqe99d6vfxene',
    username: 'user',
    avatar: 'https://api.hello-avatar.com/adorables/100/user.png',
    isLoading: false,
    error: '',
  };

  test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should return state if not existing action', () => {
    expect(reducer(state, {})).toEqual(state);
  });

  test('should handle LOG_IN', () => {
    expect(
      reducer(initialState, {
        type: types.LOG_IN,
        payload: 'user',
      }),
    ).toEqual({
      token: '',
      username: '',
      avatar: '',
      isLoading: true,
      error: '',
    });
  });

  test('should handle LOG_IN_SUCCESS', () => {
    const logInData = {
      username: 'user',
      avatar: 'https://api.hello-avatar.com/adorables/100/user.png',
      token: 'zoizgzznlxqe99d6vfxene',
    };

    expect(
      reducer(initialState, {
        type: types.LOG_IN_SUCCESS,
        payload: logInData,
      }),
    ).toEqual({
      token: logInData.token,
      username: logInData.username,
      avatar: logInData.avatar,
      isLoading: false,
      error: '',
    });
  });

  test('should handle LOG_IN_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: types.LOG_IN_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      token: '',
      username: '',
      avatar: '',
      isLoading: false,
      error: 'Failed to fetch',
    });
  });

  test('should handle LOG_OUT', () => {
    expect(reducer(initialState, { type: types.LOG_OUT })).toEqual(initialState);
    expect(reducer(state, { type: types.LOG_OUT })).toEqual(initialState);
  });
});
