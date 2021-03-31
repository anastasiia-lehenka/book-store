import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CartItemsTable = ({ items, totalPrice }) => (
  <>
    <Table striped bordered hover className="mb-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Count</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        { items.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td>{item.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <p className="text-right">{`Total price:  ${totalPrice} $ `}</p>
  </>
);

CartItemsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    totalPrice: PropTypes.number,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartItemsTable;
