import { call, put } from 'redux-saga/effects';
import service from '../../services/service';
import { deleteUserData, setUserData } from '../../services/localStorageApi';
import { logInSuccess, logInFailure } from './actions';

export function* logInWorker({ payload }) {
  let authData;

  try {
    authData = yield call(service.logIn, payload);
  } catch (err) {
    yield put(logInFailure(err.message));
    return;
  }

  yield put(logInSuccess(authData));
  yield call(setUserData, authData);
}

export function* logOutWorker() {
  yield call(deleteUserData);
}
