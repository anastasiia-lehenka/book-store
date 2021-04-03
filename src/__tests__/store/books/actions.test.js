import * as types from '../../../store/books/types';
import * as actions from '../../../store/books/actions';

describe('Books actions', () => {
  test('should create load all books action', () => {
    const expectedAction = { type: types.LOAD_ALL_BOOKS };
    expect(actions.loadAllBooks()).toEqual(expectedAction);
  });

  test('should create load all books success action', () => {
    const data = [{
      id: '1',
      title: 'Apuntes de Javascript I - Nivel Intermedio',
      author: 'JuanMa Garrido',
      level: 'Intermediate',
      description: '(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio',
      cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png',
      price: 39.42,
      tags: ['core'],
      count: 16,
    }];
    const expectedAction = {
      type: types.LOAD_ALL_BOOKS_SUCCESS,
      payload: data,
    };

    expect(actions.loadAllBooksSuccess(data)).toEqual(expectedAction);
  });

  test('should create load all books failure action', () => {
    const error = 'Failed to fetch';
    const expectedAction = {
      type: types.LOAD_ALL_BOOKS_FAILURE,
      payload: error,
    };

    expect(actions.loadAllBooksFailure(error)).toEqual(expectedAction);
  });

  test('should create load book action', () => {
    const id = 1;
    const expectedAction = {
      type: types.LOAD_BOOK,
      payload: id,
    };

    expect(actions.loadBook(id)).toEqual(expectedAction);
  });

  test('should create load book success action', () => {
    const data = {
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
    const expectedAction = {
      type: types.LOAD_BOOK_SUCCESS,
      payload: data,
    };

    expect(actions.loadBookSuccess(data)).toEqual(expectedAction);
  });

  test('should create load book failure action', () => {
    const error = 'Failed to fetch';
    const expectedAction = {
      type: types.LOAD_BOOK_FAILURE,
      payload: error,
    };

    expect(actions.loadBookFailure(error)).toEqual(expectedAction);
  });

  test('should create set book search action', () => {
    const text = 'JS';
    const expectedAction = {
      type: types.SET_BOOKS_SEARCH,
      payload: text,
    };

    expect(actions.setBooksSearch(text)).toEqual(expectedAction);
  });

  test('should create set book filter action', () => {
    const value = 'All';
    const expectedAction = {
      type: types.SET_BOOKS_FILTER,
      payload: value,
    };

    expect(actions.setBooksFilter(value)).toEqual(expectedAction);
  });
});
