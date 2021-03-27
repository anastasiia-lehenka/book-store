import { LOAD_BOOKS, LOAD_BOOKS_FAILURE, LOAD_BOOKS_SUCCESS } from './types';

export const loadBooks = () => ({ type: LOAD_BOOKS });
export const loadBooksSuccess = (payload) => ({ type: LOAD_BOOKS_SUCCESS, payload });
export const loadBooksFailure = (payload) => ({ type: LOAD_BOOKS_FAILURE, payload });
