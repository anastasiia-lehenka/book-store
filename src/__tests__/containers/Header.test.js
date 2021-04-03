import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen } from '../../test-utils';
import Header from '../../containers/Header';

describe('Header component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Header />
      </Router>,
      {
        initialState: {
          auth: {
            username: 'user',
            avatar: 'https://api.hello-avatar.com/adorables/100/user.png',
          },
          cart: {
            totalCount: 20,
          },
        },
      },
    );
  });

  test('should render correct username', () => {
    expect(screen.getByText('user')).toBeInTheDocument();
  });

  test('should render correct avatar', () => {
    expect(screen.getByAltText('user avatar').src).toBe('https://api.hello-avatar.com/adorables/100/user.png');
  });

  test('should render correct number of items in cart', () => {
    expect(screen.getByText('Cart (20)')).toBeInTheDocument();
  });

  test('should redirect to /catalog on click on logo', () => {
    fireEvent.click(screen.getByText('JS Band Store'));
    expect(history.push).toBeCalledWith('/catalog');
  });

  test('should redirect to cart on click on cart icon', () => {
    fireEvent.click(screen.getByTestId('cart-text'));
    expect(history.push).toBeCalledWith('/cart');
  });
});

// TODO: test redirect to /login after pressing logout button
