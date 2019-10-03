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
              <li key={i} className="nav-item mx-5 pl-5">
                <Link to="/" className="nav-link "
                  activestyle={{ color: 'red' }}
                  onClick={() => getProductType({ link })}>
                  {link}
                </Link>
              </li>
            )
          });
          return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

              <div className="container">
                {/* <i className="fas fa-bars" style={{ fontSize: "20px", color: '#fff' }} onClick={() => openSideNav()} /> */}
                <ul className=" navbar-nav align-items-center">
                  <li className="nav-item mx-5 pl-5 ">
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
                  <li className="nav-item mx-5 pl-5">
                    <Link to="/cart" className="nav-link" activestyle={{ color: 'red' }}>
                      <i className="fas fa-cart-plus " />
                    </Link>
                  </li>
                </ul>
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
    width: 100px;
    height: 60px;
    line-height: 70px;
    font-size: 1.5em;
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