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
import Cart from './containers/Cart';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import './App.scss';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <ProtectedRoute exact path="/catalog" component={BookCatalog} token={token} />
        <ProtectedRoute exact path="/catalog/:id" component={BookDetails} token={token} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/">
          <Redirect to="/catalog" />
        </Route>
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
