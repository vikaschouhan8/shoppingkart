import React, { Component } from 'react';
import Default from './components/Default';
import Details from './components/Details'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar';
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Model from './components/Model';

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Model />
      </>
    )
  }
}

export default App;
