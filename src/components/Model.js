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
                        const {modelOpen, closeModel} = value;
                        const {price, img, title } = value.modelProduct
                        if(!modelOpen)
                            return null;
                        else
                            return (
                            <ModelContent>
                                <div className="container">
                                    <div className="row">
                                        <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h2>Item is added to cart</h2>
                                            <h3>Name : {title}</h3>
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h4>Price: INR {price}</h4>
                                            <Link to='/'>
                                                <ButtonContainer onClick={()=>{closeModel()}}>
                                                    store
                                                </ButtonContainer>
                                            </Link>                                            
                                            <Link to='/cart'>
                                            <ButtonContainer onClick={()=>{closeModel()}}>
                                                    Go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModelContent>
                        );
                        
                    }
                }
            </ProductConsumer>
        )
    }
}

const ModelContent = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #model{
        background: var(--mainWhite);
    }
`;