import React, { useState } from 'react';
import {
  InputGroup, Button, FormControl, Form,
} from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import './styles.scss';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button className="search-button" type="submit" variant="outline-secondary">
            <SearchIcon />
          </Button>
        </InputGroup.Prepend>
        <FormControl
          className="search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
      </InputGroup>
    </Form>
  );
};

Search.propTypes = { onSearch: PropTypes.func.isRequired };

export default React.memo(Search);
