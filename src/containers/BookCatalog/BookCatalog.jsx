import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { loadBooks } from '../../store/books/actions';
import BookItem from '../../components/BookItem';
import './styles.scss';

const BookCatalog = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <Container fluid className="wrapper">
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
        { books.map((book) => <BookItem key={book.id} bookData={book} />)}
      </Row>
    </Container>
  );
};

export default BookCatalog;
