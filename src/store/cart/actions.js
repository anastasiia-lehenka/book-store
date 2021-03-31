import {
  ADD_BOOK_TO_CART,
  PURCHASE,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE,
  SHOW_MODAL,
  HIDE_MODAL,
  CLEAR_CART,
} from './types';

export const addBookToCart = (payload) => ({ type: ADD_BOOK_TO_CART, payload });
export const purchase = (payload) => ({ type: PURCHASE, payload });
export const purchaseSuccess = (payload) => ({ type: PURCHASE_SUCCESS, payload });
export const purchaseFailure = (payload) => ({ type: PURCHASE_FAILURE, payload });
export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });
export const clearCart = () => ({ type: CLEAR_CART });
