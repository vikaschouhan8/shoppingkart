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

          let NavLink = links.map((link, i) => {
            return (
              <li key={i} className="nav-item mx-5 pl-5 col-md-1">
                <Link to="/" className="nav-link "
                  activestyle={{ color: 'red' }}
                  onClick={() => getProductType({ link })}>
                  {link}
                </Link>
              </li>
            )
          });
          return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark" style={{height: "20px !important"}}>

              <div className="container containerHeight">
                <div className="row">
                {/* <i className="fas fa-bars" style={{ fontSize: "20px", color: '#fff' }} onClick={() => openSideNav()} /> */}
                <ul className=" navbar-nav align-items-center">
                  <li className="nav-item mx-5 pl-5 col-md-1">
                    <Link to="/">
                      <div className="body">
                        <div className="box">
                          <div className="inner">
                            <span>GadgetKart</span>
                          </div>
                          <div className="inner">
                            <span>GadgetKart</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  {NavLink}
                  <li className="nav-item mx-5 pl-5 col-md 1">
                    <Link to="/cart" className="nav-link" activestyle={{ color: 'red' }}>
                      <i className="fas fa-cart-plus " />
                    </Link>
                  </li>
                </ul>
                </div>
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
      flex-direction: column !important;
    }
  }
  .containerHeight{
    height: -webkit-fill-available;
  }
  .body {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .box {
    display: flex;
  }
  
  .box .inner {
    width: 80px;
    height: 40px;
    line-height: 42px;
    font-size: 1em;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .box .inner:first-child {
    background-color: white;
    color: black;
    transform-origin: right;
    transform: perspective(100px) rotateY(-15deg);
  }
  
  .box .inner:last-child {
    background-color: grey;
    color: lightgrey;
    transform-origin: left;
    transform: perspective(100px) rotateY(15deg);
  }
  
  .box .inner span {
    position: absolute;
    animation: marquee 5s linear infinite;
  }
  
  .box .inner:first-child span {
    animation-delay: 2.5s;
    left: -100%;
  }
  
  @keyframes marquee {
    from {
      left: 100%;
    }
  
    to {
      left: -100%;
    }
  }
`;