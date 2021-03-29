import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookCatalog from './containers/BookCatalog';
import BookDetails from './containers/BookDetails';
import './App.scss';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/catalog" component={BookCatalog} />
      <Route exact path="/catalog/:id" component={BookDetails} />
    </Switch>
  </Router>
);

export default App;
