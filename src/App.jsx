import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BookCatalog from './containers/BookCatalog';
import './App.scss';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/catalog" component={BookCatalog} />
    </Switch>
  </Router>
);

export default App;
