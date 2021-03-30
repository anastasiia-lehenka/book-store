import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { CartFill as CartIcon } from 'react-bootstrap-icons';
import Header from '../Header';
import './styles.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.data);
  const totalOrderPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <Header />
      {cartItems.length
        ? (
          <div className="wrapper">
            <div className="purchase-button-container">
              <Button variant="secondary">Purchase</Button>
            </div>
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
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.count}</td>
                    <td>{item.price}</td>
                    <td>{item.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="text-right">{`Total price:  ${totalOrderPrice} $ `}</p>
          </div>
        )
        : (
          <div className="wrapper empty-cart-container">
            <CartIcon className="cart-icon" />
            <p>Your shopping cart is empty</p>
          </div>
        )}
    </>
  );
};

export default Cart;
