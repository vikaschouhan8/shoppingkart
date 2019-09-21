import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import {ButtonContainer} from './Button'
export default class Model extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {openSideNav, closeSideNav,sidenavOpen} = value;
                        const {a, b, c} = value.links;
                        
                        if(!sidenavOpen)
                            return null;
                        else
                            return (
                            <SideNavContainer>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            {a}
                                        </Link>
                                    </li>
                                    <li>{b}</li>
                                    <li>{c}</li>
                                    <li>Logout</li>
                                    <li>
                                        <Link to="cart">
                                            Cart
                                        </Link>
                                    </li>
                                </ul>
                            </SideNavContainer>
                        );
                        
                    }
                }
            </ProductConsumer>
        )
    }
}

const SideNavContainer = styled.div`
    position:fixed;
    top:65px;
    left:0;
    // right:0;
    bottom:0;
    // height:100vh;
    background:steelblue;
    display:flex;
    // align-items:center;
    // justify-content:center;
    ul {
        margin-left: 0;
    }
    li {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #f1f1f1;
        display: block;
      }
    li:hover{
        color:#818181;
    }
`;