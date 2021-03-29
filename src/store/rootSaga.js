import { takeEvery } from 'redux-saga/effects';
import { loadAllBooksWorker, loadBookWorker } from './books/saga';
import { LOAD_ALL_BOOKS, LOAD_BOOK } from './books/types';

function* rootSaga() {
  yield takeEvery(LOAD_ALL_BOOKS, loadAllBooksWorker);
  yield takeEvery(LOAD_BOOK, loadBookWorker);
}

export default rootSaga;
