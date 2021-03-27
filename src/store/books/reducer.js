import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_FAILURE,
} from './types';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case LOAD_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default: return state;
  }
};

export default reducer;
