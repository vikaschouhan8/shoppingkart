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

    getItem = (id) =>{
        const product = this.state.products.find(item=>item.id === id)
        return product
    }

    handleDetail = (id) => {
        const details = this.getItem(id)
        this.setState(()=>{
            return {
                detailProduct:details
            }
        })
    }

    addToCart = (id) => {
        console.log(`hello from Add to cart ${id}`)
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