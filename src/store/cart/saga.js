import { call, put, select } from 'redux-saga/effects';
import service from '../../services/service';
import {
  purchaseSuccess,
  purchaseFailure,
  showModal,
} from './actions';

// eslint-disable-next-line import/prefer-default-export
export function* purchaseWorker({ payload }) {
  const { auth } = yield select();
  const data = {
    books: [],
  };

  payload.forEach((book) => {
    let i = book.count;

    while (i) {
      data.books.push(book.id);
      i -= 1;
    }
  });

  try {
    yield call(service.purchase, data, auth.token);
  } catch (err) {
    yield put(purchaseFailure(err.message));
    return;
  }

  yield put(purchaseSuccess());
  yield put(showModal());
}
