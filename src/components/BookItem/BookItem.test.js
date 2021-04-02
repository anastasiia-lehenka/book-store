import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import BookItem from './index';

describe('BookItem component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  beforeEach(() => {
    const data = {
      id: '1',
      title: 'Some book',
      author: 'Some author',
      level: 'Some level',
      description: 'Some description',
      cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png',
      tags: ['tag1', 'tag2'],
      price: 10,
      count: 1,
    };

    render(
      <Router history={history}>
        <BookItem bookData={data} />
      </Router>,
    );
  });

  test('should render props correctly', () => {
    expect(screen.getByAltText('book cover').src).toBe('https://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png');
    expect(screen.getByTestId('book-card-author')).toHaveTextContent('Some author');
    expect(screen.getByTestId('book-card-title')).toHaveTextContent('Some book');
    expect(screen.getByTestId('book-card-price')).toHaveTextContent('10$');
  });

  test('should redirect to Book Details of correct book on click on View button', () => {
    fireEvent.click(screen.getByText('View'));
    expect(history.push).toHaveBeenCalledWith('/catalog/1');
  });
});
