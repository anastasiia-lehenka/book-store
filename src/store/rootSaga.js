import { takeEvery } from 'redux-saga/effects';
import { booksWorker } from './books/saga';
import { LOAD_BOOKS } from './books/types';

function* rootSaga() {
  yield takeEvery(LOAD_BOOKS, booksWorker);
}

export default rootSaga;
