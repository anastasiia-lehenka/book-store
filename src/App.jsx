import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCatalog from './containers/BookCatalog';
import BookDetails from './containers/BookDetails';
import Login from './containers/Login';
import './App.scss';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      { !token && <Redirect to="/login" /> }
      <Switch>
        <Route exact path="/catalog" component={BookCatalog} />
        <Route exact path="/catalog/:id" component={BookDetails} />
        <Route exact path="/login" component={Login} />
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
