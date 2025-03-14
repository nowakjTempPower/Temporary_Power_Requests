import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import AdminPage from './pages/AdminPage';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/request/:id" component={RequestPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  </Router>
);

export default App;