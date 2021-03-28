import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Button } from 'react-bootstrap';
import './styles.scss';

const BookItem = ({ bookData }) => (
  <Col className="book-item">
    <Card className="book-card h-100">
      <div className="book-card__image-container">
        <Card.Img className="book-card__image" variant="top" src={bookData.cover} alt="book cover" />
      </div>
      <Card.Body className="book-card__body">
        <Card.Title>{bookData.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{bookData.author}</Card.Subtitle>
      </Card.Body>
      <Card.Footer className="book-card__footer">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <p className="book-card__price">{bookData.price}$</p>
        <Button variant="secondary" size="sm">View</Button>
      </Card.Footer>
    </Card>
  </Col>
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
