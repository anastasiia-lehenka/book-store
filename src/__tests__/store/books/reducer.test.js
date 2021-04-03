import reducer from '../../../store/books/reducer';
import * as types from '../../../store/books/types';
import { LOG_OUT } from '../../../store/auth/types';

describe('Books reducer', () => {
  const bookData = {
    id: '1',
    title: 'Apuntes de Javascript I - Nivel Intermedio',
    author: 'JuanMa Garrido',
    level: 'Intermediate',
    description: '(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio',
    cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png',
    price: 39.42,
    tags: ['core'],
    count: 16,
  };

  const newBookData = {
    id: '2',
    title: 'Some book',
    author: 'Some author',
    level: 'Some level',
    description: 'Some description',
    cover: 'Some link',
    price: 40,
    tags: ['core'],
    count: 26,
  };

  const initialState = {
    data: [],
    isLoading: false,
    error: '',
    search: '',
    filter: 'All',
    openedBook: {
      data: {},
      isLoading: false,
      error: '',
    },
  };

  const state = {
    data: [bookData],
    isLoading: true,
    error: 'Failed to fetch',
    search: 'js',
    filter: '0-25',
    openedBook: {
      data: bookData,
      isLoading: true,
      error: 'Failed to fetch',
    },
  };

  test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should return state if not existing action', () => {
    expect(reducer(state, {})).toEqual(state);
  });

  test('should handle LOAD_ALL_BOOKS', () => {
    expect(reducer(initialState, { type: types.LOAD_ALL_BOOKS })).toEqual({
      data: [],
      search: '',
      filter: 'All',
      openedBook: {
        data: {},
        isLoading: false,
        error: '',
      },
      isLoading: true,
      error: '',
    });

    expect(reducer(state, { type: types.LOAD_ALL_BOOKS })).toEqual({
      data: [bookData],
      search: 'js',
      filter: '0-25',
      openedBook: {
        data: bookData,
        isLoading: true,
        error: 'Failed to fetch',
      },
      isLoading: true,
      error: '',
    });
  });

  test('should handle LOAD_ALL_BOOKS_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_ALL_BOOKS_SUCCESS,
        payload: [newBookData],
      }),
    ).toEqual({
      data: [newBookData],
      search: '',
      filter: 'All',
      openedBook: {
        data: {},
        isLoading: false,
        error: '',
      },
      isLoading: false,
      error: '',
    });

    expect(
      reducer(state, {
        type: types.LOAD_ALL_BOOKS_SUCCESS,
        payload: [newBookData],
      }),
    ).toEqual({
      data: [newBookData],
      search: 'js',
      filter: '0-25',
      openedBook: {
        data: bookData,
        isLoading: true,
        error: 'Failed to fetch',
      },
      isLoading: false,
      error: '',
    });
  });

  test('should handle LOAD_ALL_BOOKS_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_ALL_BOOKS_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      data: [],
      search: '',
      filter: 'All',
      openedBook: {
        data: {},
        isLoading: false,
        error: '',
      },
      isLoading: false,
      error: 'Failed to fetch',
    });

    expect(
      reducer(state, {
        type: types.LOAD_ALL_BOOKS_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      data: [],
      search: 'js',
      filter: '0-25',
      openedBook: {
        data: bookData,
        isLoading: true,
        error: 'Failed to fetch',
      },
      isLoading: false,
      error: 'Failed to fetch',
    });
  });

  test('should handle LOAD_BOOK', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_BOOK,
        payload: '1',
      }),
    )
      .toEqual({
        data: [],
        search: '',
        filter: 'All',
        openedBook: {
          data: {},
          isLoading: true,
          error: '',
        },
        isLoading: false,
        error: '',
      });

    expect(
      reducer(state, {
        type: types.LOAD_BOOK,
        payload: '1',
      }),
    ).toEqual({
      data: [bookData],
      search: 'js',
      filter: '0-25',
      openedBook: {
        data: {},
        isLoading: true,
        error: '',
      },
      isLoading: true,
      error: 'Failed to fetch',
    });
  });

  test('should handle LOAD_BOOK_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_BOOK_SUCCESS,
        payload: newBookData,
      }),
    ).toEqual({
      data: [],
      search: '',
      filter: 'All',
      openedBook: {
        data: newBookData,
        isLoading: false,
        error: '',
      },
      isLoading: false,
      error: '',
    });

    expect(
      reducer(state, {
        type: types.LOAD_BOOK_SUCCESS,
        payload: newBookData,
      }),
    ).toEqual({
      data: [bookData],
      search: 'js',
      filter: '0-25',
      openedBook: {
        data: newBookData,
        isLoading: false,
        error: '',
      },
      isLoading: true,
      error: 'Failed to fetch',
    });
  });

  test('should handle LOAD_BOOK_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: types.LOAD_BOOK_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      data: [],
      search: '',
      filter: 'All',
      openedBook: {
        data: {},
        isLoading: false,
        error: 'Failed to fetch',
      },
      isLoading: false,
      error: '',
    });

    expect(
      reducer(state, {
        type: types.LOAD_BOOK_FAILURE,
        payload: 'Failed to fetch',
      }),
    ).toEqual({
      data: [bookData],
      search: 'js',
      filter: '0-25',
      openedBook: {
        data: {},
        isLoading: false,
        error: 'Failed to fetch',
      },
      isLoading: true,
      error: 'Failed to fetch',
    });
  });

  test('should handle SET_BOOKS_SEARCH', () => {
    expect(
      reducer(initialState, {
        type: types.SET_BOOKS_SEARCH,
        payload: 'script',
      }),
    ).toEqual({
      data: [],
      search: 'script',
      filter: 'All',
      openedBook: {
        data: {},
        isLoading: false,
        error: '',
      },
      isLoading: false,
      error: '',
    });

    expect(
      reducer(state, {
        type: types.SET_BOOKS_SEARCH,
        payload: 'script',
      }),
    ).toEqual({
      data: [bookData],
      search: 'script',
      filter: '0-25',
      openedBook: {
        data: bookData,
        isLoading: true,
        error: 'Failed to fetch',
      },
      isLoading: true,
      error: 'Failed to fetch',
    });
  });

  test('should handle SET_BOOKS_FILTER', () => {
    expect(
      reducer(initialState, {
        type: types.SET_BOOKS_FILTER,
        payload: '50',
      }),
    ).toEqual({
      data: [],
      search: '',
      filter: '50',
      openedBook: {
        data: {},
        isLoading: false,
        error: '',
      },
      isLoading: false,
      error: '',
    });

    expect(
      reducer(state, {
        type: types.SET_BOOKS_FILTER,
        payload: '50',
      }),
    ).toEqual({
      data: [bookData],
      search: 'js',
      filter: '50',
      openedBook: {
        data: bookData,
        isLoading: true,
        error: 'Failed to fetch',
      },
      isLoading: true,
      error: 'Failed to fetch',
    });
  });

  test('should handle LOG_OUT', () => {
    expect(reducer(initialState, { type: LOG_OUT })).toEqual(initialState);
    expect(reducer(state, { type: LOG_OUT })).toEqual(initialState);
  });
});
