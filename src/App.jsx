import React from 'react';
import Home from './components/main/home';
import Services from './components/main/services';
import Contacts from './components/main/contacts';
import Login from './components/main/login';
import AdminHome from './components/admin/admin-home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './global.jsx';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <AdminHome />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
