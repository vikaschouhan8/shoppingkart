import React, { Component } from 'react';
import Default from './components/Default';
import Details from './components/Details'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route to='/' exact component={ProductList} />
          <Route to='/details' component={Details} />
          <Route component={Default} />
        </Switch>
      </>
    )
  }
}

export default App;
