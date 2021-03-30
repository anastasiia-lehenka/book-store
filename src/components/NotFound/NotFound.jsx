import React from 'react';
import './styles.scss';
import notFoundImage from '../../assets/images/gandalf.png';

const NotFound = () => (
  <div className="not-found wrapper">
    <img src={notFoundImage} alt="gandalf not found" />
    <div className="message">
      <h1 className="mb-4">404 - You Shall Not Pass</h1>
      <p>
        Uh oh, Gandalf is blocking the way!
        <span className="d-block">Maybe you have a typo in the url? Or you meant to go to a different location?</span>
      </p>
    </div>
  </div>
);

export default NotFound;
