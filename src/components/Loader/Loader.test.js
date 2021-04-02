import React from 'react';
import { screen, render } from '@testing-library/react';
import Loader from './index';

describe('Loader component', () => {
  test('renders correctly', () => {
    render(<Loader />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
