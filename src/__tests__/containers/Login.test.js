import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen } from '../../test-utils';
import Login from '../../containers/Login';

describe('Login component', () => {
  const history = createMemoryHistory();
  history.replace = jest.fn();

  const setup = (token) => {
    render(
      <Router history={history}>
        <Login />
      </Router>,
      {
        initialState: {
          auth: {
            token,
            isLoading: false,
          },
        },
      },
    );
  };

  test('should render all elements if no token provided', () => {
    setup();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  test('should redirect to /catalog if token provided', () => {
    setup('token');

    const args = {
      hash: '',
      pathname: '/catalog',
      search: '',
      state: undefined,
    };

    expect(history.replace).toHaveBeenCalledWith(args);
  });

  test('should show error if invalid username', () => {
    setup();
    fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'ab' } });
    expect(screen.getByText('Username is not valid. Username should be 4-16 characters long.')).toBeInTheDocument();
  });

  test('should render new value on input change', () => {
    setup();
    const input = screen.getByPlaceholderText('Enter username');
    fireEvent.change(input, { target: { value: '12' } });
    expect(input.value).toBe('12');
  });

  test('should disable login button after click', () => {
    setup();

    const input = screen.getByPlaceholderText('Enter username');
    fireEvent.change(input, { target: { value: 'user' } });

    const button = screen.getByText('Log In');
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});

// TODO: test redirect to /catalog after successful login
