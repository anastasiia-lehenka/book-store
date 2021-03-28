import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';
import { loadBooks } from '../../store/books/actions';
import BookItem from '../../components/BookItem';
import Search from '../../components/Search';
import './styles.scss';

const BookCatalog = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loadingBooks = useSelector((state) => state.books.loading);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const searchBooks = useCallback((value) => {
    setSearch(value.toLowerCase().trim());
  }, []);

  const filteredBooks = search
    ? books.filter((book) => book.title.toLowerCase().includes(search))
    : books;

  const renderBooks = (booksData) => (
    booksData.length
      ? booksData.map((book) => <BookItem key={book.id} bookData={book} />)
      : <p className="centered text-muted">No items match your search</p>
  );

  return (
    <Container fluid className="wrapper">
      <Row className="mb-4">
        <Col sm={6} md={4} lg={3}>
          <Search onSearch={searchBooks} />
        </Col>
      </Row>
      { loadingBooks
        ? <Spinner className="d-block centered" animation="border" variant="secondary" size="lg" />
        : (
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
            { books.length && renderBooks(filteredBooks) }
          </Row>
        )}

    </Container>
  );
};

export default BookCatalog;
