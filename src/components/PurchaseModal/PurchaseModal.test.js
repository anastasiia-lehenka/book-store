import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PurchaseModal from './index';

describe('PurchaseModal component', () => {
  const onClose = jest.fn();

  beforeEach(() => {
    render(
      <PurchaseModal onClose={onClose}>
        <div>test</div>
      </PurchaseModal>,
    );
  });

  test('should show the children', () => {
    expect(screen.getByText('test')).toBeTruthy();
  });

  test('should fire onClose event on click on Close button', () => {
    fireEvent.click(screen.getByTestId('modal-close-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
