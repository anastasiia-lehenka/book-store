import { call, put } from 'redux-saga/effects';
import service from '../../service';
import {
  loadAllBooksSuccess,
  loadAllBooksFailure,
  loadBookSuccess,
  loadBookFailure,
} from './actions';

export function* loadAllBooksWorker() {
  let books;

  try {
    books = yield call(service.getAllBooks);
  } catch (err) {
    yield put(loadAllBooksFailure(err.message));
    return;
  }

  yield put(loadAllBooksSuccess(books));
}

export function* loadBookWorker({ payload }) {
  let book;

  try {
    book = yield call(service.getBook, payload);
  } catch (err) {
    yield put(loadBookFailure(err.message));
    return;
  }

  yield put(loadBookSuccess(book));
}
