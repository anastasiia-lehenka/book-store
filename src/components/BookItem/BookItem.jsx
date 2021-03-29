import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

const BookItem = ({ bookData }) => (
  <Card className="book-card">
    <Card.Img className="book-card__image" variant="top" src={bookData.cover} alt="book cover" />
    <Card.Body className="book-card__body">
      <Card.Title>{bookData.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{bookData.author}</Card.Subtitle>
    </Card.Body>
    <Card.Footer className="book-card__footer">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p className="m-0">{bookData.price}$</p>
      <Link to={`/catalog/${bookData.id}`}>
        <Button variant="outline-secondary" size="sm">View</Button>
      </Link>
    </Card.Footer>
  </Card>
);

BookItem.propTypes = {
  bookData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
};

export default BookItem;
