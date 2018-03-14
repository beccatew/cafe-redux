import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => (
  <div>
  <NavBar />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/products:id" component={Product} />
  <ProtectedRoute path="/dashboard" component={Dashboard} />
  <ProtectedRoute path="/products/:id" component={Product} />
  <Route component={NoMatch} />
  </Switch>
  </div>
);

export default App;
