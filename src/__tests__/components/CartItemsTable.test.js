import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CartItemsTable from '../../components/CartItemsTable';

describe('CartItemsTable component', () => {
  test('should render props correctly', () => {
    const data = [
      {
        id: '1',
        title: 'Some book',
        price: 50,
        count: 1,
        totalPrice: 50,
      },
      {
        id: '2',
        title: 'Other book',
        price: 10,
        count: 3,
        totalPrice: 30,
      },
    ];

    render(<CartItemsTable items={data} totalPrice={140} />);

    const table = screen.getByRole('table');
    const rows = within(table).getAllByRole('row');
    expect(rows).toHaveLength(3);

    const firstRowCells = within(rows[1]).getAllByRole('cell');
    expect(firstRowCells[0]).toHaveTextContent('Some book');
    expect(firstRowCells[1]).toHaveTextContent('1');
    expect(firstRowCells[2]).toHaveTextContent('50');
    expect(firstRowCells[3]).toHaveTextContent('50');

    const secondRowCells = within(rows[2]).getAllByRole('cell');
    expect(secondRowCells[0]).toHaveTextContent('Other book');
    expect(secondRowCells[1]).toHaveTextContent('3');
    expect(secondRowCells[2]).toHaveTextContent('10');
    expect(secondRowCells[3]).toHaveTextContent('30');

    expect(screen.getByTestId('cart-total-price')).toHaveTextContent('Total price: 140 $');
  });
});
