import { call, put } from 'redux-saga/effects';
import service from '../../service';
import { loadBooksSuccess, loadBooksFailure } from './actions';

// eslint-disable-next-line import/prefer-default-export
export function* booksWorker() {
  let books;

  try {
    books = yield call(service.getBooks);
  } catch (err) {
    yield put(loadBooksFailure(err.message));
    return;
  }

  yield put(loadBooksSuccess(books));
}
