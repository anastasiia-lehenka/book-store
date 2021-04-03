import * as types from '../../../store/cart/types';
import * as actions from '../../../store/cart/actions';

describe('Cart actions', () => {
  test('should create add book to cart action', () => {
    const book = {
      id: '57',
      title: 'Mostly adequate guide to functional programming',
      price: 17.06,
      count: 1,
      totalPrice: 17.06,
    };
    const expectedAction = {
      type: types.ADD_BOOK_TO_CART,
      payload: book,
    };

    expect(actions.addBookToCart(book)).toEqual(expectedAction);
  });

  test('should create purchase action', () => {
    const book = {
      id: '57',
      title: 'Mostly adequate guide to functional programming',
      price: 17.06,
      count: 1,
      totalPrice: 17.06,
    };
    const expectedAction = {
      type: types.PURCHASE,
      payload: book,
    };

    expect(actions.purchase(book)).toEqual(expectedAction);
  });

  test('should create purchase success action', () => {
    const expectedAction = { type: types.PURCHASE_SUCCESS };
    expect(actions.purchaseSuccess()).toEqual(expectedAction);
  });

  test('should create purchase failure action', () => {
    const error = 'Failed to fetch';
    const expectedAction = {
      type: types.PURCHASE_FAILURE,
      payload: error,
    };

    expect(actions.purchaseFailure(error)).toEqual(expectedAction);
  });

  test('should create show modal action', () => {
    const expectedAction = { type: types.SHOW_MODAL };
    expect(actions.showModal()).toEqual(expectedAction);
  });

  test('should create hide modal action', () => {
    const expectedAction = { type: types.HIDE_MODAL };
    expect(actions.hideModal()).toEqual(expectedAction);
  });

  test('should create clear cart action', () => {
    const expectedAction = { type: types.CLEAR_CART };
    expect(actions.clearCart()).toEqual(expectedAction);
  });
});
