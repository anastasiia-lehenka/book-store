import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { loadBooks } from '../../store/books/actions';
import BookItem from '../../components/BookItem';
import FilterDropdown from '../../components/FilterDropdown';
import Header from '../../components/Header';
import Search from '../../components/Search';
import './styles.scss';

const BookCatalog = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loadingBooks = useSelector((state) => state.books.loading);
  const [searchText, setSearchText] = useState('');
  const [filterValue, setFilterValue] = useState('All');

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const onSearch = useCallback((value) => {
    setSearchText(value.toLowerCase().trim());
  }, []);

  const onFilter = useCallback((value) => {
    setFilterValue(value);
  }, []);

  const searchBooks = (booksData, search) => (
    booksData.filter((book) => book.title.toLowerCase().includes(search)));

  const filterBooks = (booksData, filter) => {
    if (filter !== 'All') {
      const borderValues = filter.split('-');
      return borderValues[1]
        ? booksData.filter((book) => book.price > borderValues[0] && book.price < borderValues[1])
        : booksData.filter((book) => book.price > borderValues[0]);
    }

    return booksData;
  };

  const renderBooks = (booksData) => (
    booksData.length
      ? booksData.map((book) => <BookItem key={book.id} bookData={book} />)
      : <p className="centered text-muted">No items match your search</p>
  );

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="filters">
          <Search onSearch={onSearch} />
          <FilterDropdown onChange={onFilter} />
        </div>
        { loadingBooks
          ? <Spinner className="d-block centered" animation="border" variant="secondary" size="lg" />
          : (
            <div className="books-container">
              { books.length
                    && renderBooks(filterBooks(searchBooks(books, searchText), filterValue))}
            </div>
          )}
      </div>
    </>
  );
};

export default BookCatalog;
