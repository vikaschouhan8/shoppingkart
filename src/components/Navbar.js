import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import SearchBox from './SearchBox';
import { ProductConsumer } from "../context"
// import Logout from './Logout';
export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => {
          const { openSideNav, getProductType, links } = data;
          
          let NavLink = links.map((link,i)=>{
            return (
              <li key={i} className="nav-item mx-5 pl-5">
                <Link to="/" className="nav-link" activeStyle={{ color: 'red' }} onClick={() => getProductType({link})}>
                  {link}
                </Link>
              </li>
            )
          });
          return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
              {/* 
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
              {/* <Link to="/store"> */}
              {/* <img src={logo} alt="store" className="navbar-brand" /> */}
              {/* <ProductConsumer>
                {data=>{
                  const {openSideNav} = data;
                  return ( */}
              <div className="container">              
              <i className="fas fa-bars"
                style={{ fontSize: "20px", color: '#fff' }}
                onClick={() => openSideNav()}
              />

              {/* </Link> */}
              <ul className="navbar-nav align-items-center">
                <li className="nav-item mx-5 pl-5">
                  <Link to="/" className="nav-link">
                    GadgetKart
                  </Link>
                </li>
                {
                  NavLink
                }
              </ul>  
              <Link to="/cart" className="ml-auto">
                  <span className="mr-2">
                    <i className="fas fa-cart-plus " />
                  </span>
                  Cart¸
              </Link>
              {/* <Logout /> */}
            </div>
            </NavWrapper>
          )
        }}

      </ProductConsumer>
    )
  }
}

const NavWrapper = styled.nav`
  // background: var(--mainBlue);
  background: rgba(45,45,45,0.98);
  font-size:20px;
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;