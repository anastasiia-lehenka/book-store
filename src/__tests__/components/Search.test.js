import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../../components/Search';

describe('Search component', () => {
  const mockFn = jest.fn();
  let button;
  let input;

  beforeEach(() => {
    render(<Search defaultValue="script" onSearch={mockFn} />);
    input = screen.getByLabelText('search-input');
    button = screen.getByRole('button');
  });

  test('should render default text', () => {
    expect(input.value).toBe('script');
  });

  test('should render new value on change', () => {
    expect(input.value).toBe('script');
    fireEvent.change(input, { target: { value: 'java' } });
    expect(input.value).toBe('java');
  });

  test('should call onSearch on search button click', () => {
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should call onSearch on input submit', () => {
    fireEvent.submit(input);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
