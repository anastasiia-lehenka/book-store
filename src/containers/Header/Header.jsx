import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartFill as CartIcon } from 'react-bootstrap-icons';
import { logOut } from '../../store/auth/actions';
import './styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const avatar = useSelector((state) => state.auth.avatar);

  return (
    <div className="mb-5">
      <div className="wrapper">
        <div className="header__auth-data">
          <span className="mr-3">{username}</span>
          <img src={avatar} className="header__user-avatar" alt="user avatar" />
          <Button variant="outline-danger" size="sm" onClick={() => dispatch(logOut())}>Sign out</Button>
        </div>
      </div>
      <div className="header__bordered">
        <div className="wrapper">
          <div className="header__main">
            <h3>JS Band Store</h3>
            <Link to="/">
              <CartIcon className="header__cart-icon" />
              <span className="mr-1">Cart (3)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
