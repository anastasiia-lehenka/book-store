import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '../../test-utils';
import BookCatalog from '../../containers/BookCatalog';

describe('BookCatalog component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  const bookData = [{
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

  const multipleBookData = [{
    id: '1',
    title: 'Apuntes de Javascript I - Nivel Intermedio',
    author: 'JuanMa Garrido',
    level: 'Intermediate',
    description: '(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio',
    cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png',
    price: 39.42,
    tags: ['core'],
    count: 16,
  },
  {
    id: '2',
    title: 'Some book',
    author: 'Some author',
    level: 'Some level',
    description: 'Some description',
    cover: 'Some link',
    price: 10,
    tags: ['core'],
    count: 26,
  }];

  const setup = (data, isLoading, searchText, filterValue) => {
    render(
      <Router history={history}>
        <BookCatalog />
      </Router>,
      {
        initialState: {
          books: {
            data,
            isLoading,
            search: searchText,
            filter: filterValue,
          },
        },
      },
    );
  };

  test('should show books data', () => {
    setup(bookData, false, '', 'All');
    expect(screen.getByAltText('book cover')).toBeInTheDocument();
    expect(screen.getByTestId('book-card-author')).toBeInTheDocument();
    expect(screen.getByTestId('book-card-title')).toBeInTheDocument();
    expect(screen.getByTestId('book-card-price')).toBeInTheDocument();
  });

  test('should show loader if loading books', () => {
    setup(bookData, true, '', 'All');
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('should show message if no items match search', () => {
    setup(bookData, false, 'book', 'All');
    expect(screen.getByText('No items match your search')).toBeInTheDocument();
  });

  test('should show message if no items match filter', () => {
    setup(bookData, false, '', '50');
    expect(screen.getByText('No items match your search')).toBeInTheDocument();
  });

  test('should filter correctly', () => {
    setup(multipleBookData, false, '', '25-50');
    expect(screen.getByText('Apuntes de Javascript I - Nivel Intermedio')).toBeInTheDocument();
    expect(screen.queryByText('Some book')).not.toBeInTheDocument();
  });

  test('should search correctly', () => {
    setup(multipleBookData, false, 'apuntes', 'All');
    expect(screen.getByText('Apuntes de Javascript I - Nivel Intermedio')).toBeInTheDocument();
    expect(screen.queryByText('Some book')).not.toBeInTheDocument();
  });
});
