import * as actions from '../../../store/auth/actions';
import * as types from '../../../store/auth/types';

describe('Auth actions', () => {
  test('should create login action', () => {
    const username = 'user';
    const expectedAction = {
      type: types.LOG_IN,
      payload: username,
    };

    expect(actions.logIn(username)).toEqual(expectedAction);
  });

  test('should create login success action', () => {
    const logInData = {
      username: 'user',
      avatar: 'https://api.hello-avatar.com/adorables/100/user.png',
      token: 'zoizgzznlxqe99d6vfxene',
    };
    const expectedAction = {
      type: types.LOG_IN_SUCCESS,
      payload: logInData,
    };

    expect(actions.logInSuccess(logInData)).toEqual(expectedAction);
  });

  test('should create login failure action', () => {
    const error = 'Failed to fetch';
    const expectedAction = {
      type: types.LOG_IN_FAILURE,
      payload: error,
    };

    expect(actions.logInFailure(error)).toEqual(expectedAction);
  });

  test('should create log out action', () => {
    const expectedAction = { type: types.LOG_OUT };
    expect(actions.logOut()).toEqual(expectedAction);
  });
});
