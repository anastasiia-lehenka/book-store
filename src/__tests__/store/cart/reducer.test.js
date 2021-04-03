import reducer from '../../../store/cart/reducer';
import * as types from '../../../store/cart/types';

describe('Cart reducer', () => {
  const book = {
    id: '57',
    title: 'Mostly adequate guide to functional programming',
    price: 17.06,
    count: 1,
    totalPrice: 17.06,
  };

  const otherBook = {
    id: '1',
    title: 'Other book',
    price: 10,
    count: 2,
    totalPrice: 20,
  };

  const initialState = {
    data: [],
    totalPrice: 0,
    totalCount: 0,
    isLoading: false,
    error: '',
    isModalShown: false,
  };

  const state = {
    data: [
      { ...book },
      { ...otherBook },
    ],
    totalPrice: 34.12,
    totalCount: 3,
    isLoading: true,
    error: 'Failed to fetch',
    isModalShown: true,
  };

  test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should return state if not existing action', () => {
    expect(reducer(state, {})).toEqual(state);
  });

  test('should handle ADD_BOOK_TO_CART', () => {
    const oneBookState = {
      data: [book],
      totalPrice: book.totalPrice,
      totalCount: book.count,
      isLoading: false,
      error: '',
      isModalShown: false,
    };

    const twoBooksState = {
      data: [
        {
          ...book,
          count: 2,
          totalPrice: 34.12,
        },
      ],
      totalPrice: 34.12,
      totalCount: 2,
      isLoading: false,
      error: '',
      isModalShown: false,
    };

    const diffBooksState = {
      data: [
        {
          ...book,
          count: 2,
          totalPrice: 34.12,
        },
        { ...otherBook },
      ],
      totalPrice: 54.12,
      totalCount: 4,
      isLoading: false,
      error: '',
      isModalShown: false,
    };

    expect(
      reducer(initialState, {
        type: types.ADD_BOOK_TO_CART,
        payload: book,
      }),
    ).toEqual(oneBookState);

    expect(
      reducer(oneBookState, {
        type: types.ADD_BOOK_TO_CART,
        payload: book,
      }),
    ).toEqual(twoBooksState);

    expect(
      reducer(twoBooksState, {
        type: types.ADD_BOOK_TO_CART,
        payload: otherBook,
      }),
    ).toEqual(diffBooksState);
  });

  test('should handle PURCHASE', () => {
    expect(
      reducer(initialState, {
        type: types.PURCHASE,
        payload: book,
      }),
    ).toEqual({
      data: [],
      totalPrice: 0,
      totalCount: 0,
      isLoading: true,
      error: '',
      isModalShown: false,
    });

    expect(
      reducer(state, {
        type: types.PURCHASE,
        payload: book,
      }),
    ).toEqual({
      data: [
        { ...book },
        { ...otherBook },
      ],
      totalPrice: 34.12,
      totalCount: 3,
      isLoading: true,
      error: '',
      isModalShown: true,
    });
  });

  test('should handle PURCHASE_SUCCESS', () => {
    expect(reducer(initialState, { type: types.PURCHASE_SUCCESS })).toEqual({
      data: [],
      totalPrice: 0,
      totalCount: 0,
      isLoading: false,
      error: '',
      isModalShown: false,
    });

    expect(reducer(state, { type: types.PURCHASE_SUCCESS })).toEqual({
      data: [
        { ...book },
        { ...otherBook },
      ],
      totalPrice: 34.12,
      totalCount: 3,
      isLoading: false,
      error: '',
      isModalShown: true,
    });
  });

  test('should handle PURCHASE_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: types.PURCHASE_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      data: [],
      totalPrice: 0,
      totalCount: 0,
      isLoading: false,
      error: 'Failed to fetch',
      isModalShown: false,
    });

    expect(
      reducer(state, {
        type: types.PURCHASE_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      data: [
        { ...book },
        { ...otherBook },
      ],
      totalPrice: 34.12,
      totalCount: 3,
      isLoading: false,
      error: 'Failed to fetch',
      isModalShown: true,
    });
  });

  test('should handle SHOW_MODAL', () => {
    expect(reducer(initialState, { type: types.SHOW_MODAL })).toEqual({
      data: [],
      totalPrice: 0,
      totalCount: 0,
      isLoading: false,
      error: '',
      isModalShown: true,
    });

    expect(reducer(state, { type: types.SHOW_MODAL })).toEqual({
      data: [
        { ...book },
        { ...otherBook },
      ],
      totalPrice: 34.12,
      totalCount: 3,
      isLoading: true,
      error: 'Failed to fetch',
      isModalShown: true,
    });
  });

  test('should handle HIDE_MODAL', () => {
    expect(reducer(initialState, { type: types.HIDE_MODAL })).toEqual({
      data: [],
      totalPrice: 0,
      totalCount: 0,
      isLoading: false,
      error: '',
      isModalShown: false,
    });

    expect(reducer(state, { type: types.HIDE_MODAL })).toEqual({
      data: [
        { ...book },
        { ...otherBook },
      ],
      totalPrice: 34.12,
      totalCount: 3,
      isLoading: true,
      error: 'Failed to fetch',
      isModalShown: false,
    });
  });

  test('should handle CLEAR_CART', () => {
    expect(reducer(initialState, { type: types.CLEAR_CART })).toEqual(initialState);
    expect(reducer(state, { type: types.CLEAR_CART })).toEqual(initialState);
  });
});
