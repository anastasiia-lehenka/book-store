import {
  ADD_BOOK_TO_CART,
  PURCHASE,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE,
} from './types';

export const addBookToCart = (payload) => ({ type: ADD_BOOK_TO_CART, payload });
export const purchase = (payload) => ({ type: PURCHASE, payload });
export const purchaseSuccess = (payload) => ({ type: PURCHASE_SUCCESS, payload });
export const purchaseFailure = (payload) => ({ type: PURCHASE_FAILURE, payload });
