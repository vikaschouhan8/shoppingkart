import React, { Component } from 'react';
import Default from './components/Default';
import Details from './components/Details'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar';
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Model from './components/Model';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
// import Dashborad from './components/Dashboard'
import SideNav from './components/SideNav'
class App extends Component {

  render() {
    return (
      <>
        {/* <SideBar /> */}
        <SideNav />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Model />
        <Footer />
        <SideNav />
      </>
    )
  }
}

export default App;
