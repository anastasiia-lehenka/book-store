import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { TagsFill as TagsIcon } from 'react-bootstrap-icons';
import { loadBook } from '../../store/books/actions';
import Header from '../Header';
import Loader from '../../components/Loader';
import './styles.scss';

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.openedBook.data);
  const loadingBook = useSelector((state) => state.books.openedBook.isLoading);
  const [countValue, setCountValue] = useState(1);

  useEffect(() => {
    if (book.id !== id) {
      dispatch(loadBook(id));
    }
  }, [id]);

  const convertTagsToString = (tags) => (tags
    ? tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ')
    : '');

  const countTotalPrice = (price, count) => (price * count).toFixed(2);

  const changeCount = (e) => {
    const { value } = e.target;
    if (value < 1000) {
      setCountValue(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        { loadingBook
          ? <Loader />
          : (
            <div className="book-details">
              <div className="book-info">
                <div className="book-info__col">
                  <img className="book-info__image" src={book.cover} alt="book cover" />
                  <p>{book.description}</p>
                </div>
                <div className="book-info__col">
                  <h5>{book.title}</h5>
                  <p className="text-muted">{book.author}</p>
                  <div>
                    <TagsIcon className="mr-2" />
                    {convertTagsToString(book.tags)}
                  </div>
                </div>
              </div>
              <div className="book-buy">
                <div className="book-buy__col">
                  <p>Price, $:</p>
                  <p>{book.price}</p>
                </div>
                <div className="book-buy__col">
                  <p>Count:</p>
                  <Form.Control
                    className="book-count-select"
                    value={countValue}
                    onChange={changeCount}
                    type="number"
                    size="sm"
                  />
                </div>
                <div className="book-buy__col">
                  <p>Total price, $:</p>
                  <p>{countTotalPrice(book.price, countValue)}</p>
                </div>
                <div className="book-add-button">
                  <Button variant="secondary" size="sm">Add To Cart</Button>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  );
};

export default BookDetails;
