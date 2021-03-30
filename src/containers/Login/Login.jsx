import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { logIn } from '../../store/auth/actions';
import { MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from '../../constants';
import userImage from '../../assets/images/user-image.png';
import './styles.scss';

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [username, setUsername] = useState('');
  const [validationError, setValidationError] = useState(false);

  const isUserNameValid = (data) => {
    const string = data.trim();
    return (string.length >= MIN_USERNAME_LENGTH && string.length <= MAX_USERNAME_LENGTH);
  };

  const submitLogIn = (e) => {
    e.preventDefault();

    if (isUserNameValid(username)) {
      dispatch(logIn(username));
    } else {
      setValidationError(true);
    }
  };

  const onInputChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
    setValidationError(!isUserNameValid(inputValue));
  };

  return token
    ? <Redirect to="/catalog" />
    : (
      <div className="login-form-container wrapper">
        <Form className="login-form" onSubmit={submitLogIn}>
          <img className="w-100 mb-4" src={userImage} alt="user" />
          <h2 className="text-center mb-5">JS Band Store</h2>
          <Form.Group className="d-block">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className={`login-form__input ${validationError ? 'is-invalid' : ''}`}
              type="text"
              placeholder="Enter username"
              onChange={onInputChange}
            />
            { validationError && (
            <Form.Text className="text-danger">
              Username is not valid. Username should be 4-16 characters long.
            </Form.Text>
            )}
          </Form.Group>
          <Button className="w-100" disabled={isLoading} variant="secondary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    );
};

export default Login;
