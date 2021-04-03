import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FilterDropdown from '../../components/FilterDropdown';

describe('FilterDropdown component', () => {
  const mockFn = jest.fn();
  let input;

  beforeEach(() => {
    render(<FilterDropdown value="0-25" onChange={mockFn} />);
    input = screen.getByLabelText('filter-input');
  });

  test('should render value', () => {
    expect(input.value).toBe('0-25');
  });

  test('should call onChange prop on change', () => {
    expect(input.value).toBe('0-25');
    fireEvent.change(input, { target: { value: '50' } });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
