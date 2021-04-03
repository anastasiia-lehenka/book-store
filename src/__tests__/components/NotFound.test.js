import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../../components/NotFound';

describe('NotFound component', () => {
  test('renders correctly', () => {
    render(<NotFound />);

    expect(screen.getByAltText('gandalf not found')).toBeInTheDocument();
    expect(screen.getByTestId('not-found-heading')).toBeInTheDocument();
    expect(screen.getByTestId('not-found-text')).toBeInTheDocument();
  });
});
