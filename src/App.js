import React, { Component } from 'react';
import Default from './components/Default';
import Details from './components/Details'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar';
import './App.css'
import {Route, Switch,render, Redirect} from 'react-router-dom'
import Model from './components/Model';
import Footer from './components/Footer';
// import SearchBox from './components/SearchBox';
// import Dashborad from './components/Dashboard'
import SideNav from './components/SideNav'

const Login = () => {
  return (<>
    <h1>Login first</h1>
    <button onClick={()=>this.loginHandle()}>Login</button>
    </>
  );
}
class App extends Component {
  state={
    loggedIn : false
  }
  loginHandle=()=>{
    console.log("classed");
    console.log("before ;", this.state.loggedIn);
    
    this.setState(()=>{
      return {
        loggedIn:true
      }
    })
    console.log("after ;", this.state.loggedIn);


    // this.next()
  }
  // next = ()=>{
  //     return <ProductList  />
  // }
  render() {
    return (
      <>
        {/* <SideBar /> */}
        <SideNav />
        <Navbar />
        <Switch>
          {/* <Route exact strict path="/" component={Login} /> */}
          <Route exact path="/" component={ProductList} />
          {/* <Route exact path="/store" render={
            ()=>(
              this.state.loggedIn ? <ProductList /> : <Redirect to='/' />
            )
          } /> */}
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
