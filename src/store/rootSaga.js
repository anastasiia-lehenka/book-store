import { takeEvery } from 'redux-saga/effects';
import { logInWorker, logOutWorker } from './auth/saga';
import { loadAllBooksWorker, loadBookWorker } from './books/saga';
import { LOG_IN, LOG_OUT } from './auth/types';
import { LOAD_ALL_BOOKS, LOAD_BOOK } from './books/types';

function* rootSaga() {
  yield takeEvery(LOG_IN, logInWorker);
  yield takeEvery(LOAD_ALL_BOOKS, loadAllBooksWorker);
  yield takeEvery(LOAD_BOOK, loadBookWorker);
  yield takeEvery(LOG_OUT, logOutWorker);
}

export default rootSaga;
