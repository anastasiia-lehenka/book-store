import { call, put, select } from 'redux-saga/effects';
import service from '../../services/service';
import { purchaseSuccess, purchaseFailure } from './actions';

// eslint-disable-next-line import/prefer-default-export
export function* purchaseWorker({ payload }) {
  let response;
  const data = { books: [] };
  const { auth } = yield select();

  payload.forEach((book) => {
    let i = book.count;

    while (i) {
      data.books.push(book.id);
      i -= 1;
    }
  });

  try {
    response = yield call(service.purchase, data, auth.token);
  } catch (err) {
    yield put(purchaseFailure(err.message));
    return;
  }

  yield put(purchaseSuccess(response));
}
