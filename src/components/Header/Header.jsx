import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartFill as CartIcon } from 'react-bootstrap-icons';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="wrapper">
      <div className="header__auth-data">
        <span className="header__username">Alexander</span>
        <Button variant="outline-danger" size="sm">Sign out</Button>
      </div>
    </div>
    <div className="header__bordered">
      <div className="wrapper">
        <div className="header__main">
          <h3>JS Band Store</h3>
          <Link to="/">
            <CartIcon className="header__cart-icon" />
            <span>Cart (3)</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
