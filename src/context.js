import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct
    }

    componentDidMount(){
        this.setProducts()
    }
    setProducts=()=>{
        let tempProduct=[]
        storeProducts.forEach(item=>{
           const singleItems = {...item}
           tempProduct = [...tempProduct, singleItems]
        })
        this.setState(()=>{
            return {products:tempProduct}
        })
    }
    handleDetail = () => {
        console.log("hello from details")
    }
    addToCart = () => {
        console.log("hello from Add to cart")
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}