import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// eslint-disable-next-line import/no-extraneous-dependencies
import { within } from '@testing-library/dom';
import { render, screen } from '../../test-utils';
import Cart from '../../containers/Cart';

describe('Header component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  const cartData = [{
    id: '57',
    title: 'Mostly adequate guide to functional programming',
    price: 17.06,
    count: 1,
    totalPrice: 17.06,
  }];

  const setup = (data, isModalShown) => {
    render(
      <Router history={history}>
        <Cart />
      </Router>,
      {
        initialState: {
          cart: {
            data,
            totalPrice: 20,
            isModalShown,
          },
        },
      },
    );
  };

  test('should render empty cart screen if no items in cart', () => {
    setup();
    expect(screen.getByText('Your shopping cart is empty')).toBeInTheDocument();
  });

  test('should render purchase button and cart table if there are items in cart', () => {
    setup(cartData);
    expect(screen.getByText('Purchase')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('should render modal if opened', () => {
    setup(cartData, true);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(within(modal).getByRole('table')).toBeInTheDocument();
  });

  test('should not render modal if not opened', () => {
    setup(cartData, false);
    expect(screen.queryByText('modal')).not.toBeInTheDocument();
  });
});

// TODO: test opening purchase modal on click on purchase
// TODO: test closing modal on click on close button
