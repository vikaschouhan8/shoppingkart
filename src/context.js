import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modelOpen:false,
        modelProduct:detailProduct
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
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        const price = product.price;
        product.total = price;
        product.inCart = true;
        product.count = 1;
        this.setState(()=>{
            return {
                products:tempProducts,
                cart:[...this.state.cart, product]
            }
        })
    }

    // function to open model
    openModel = id => {
        const product = this.getItem(id)
        this.setState(()=>{
            return {
                modelOpen:true,
                modelProduct:product
            }
        })
    }
    //function to close model Date 15 september 2019
    closeModel = () => {
        this.setState(()=>{
            return {
                modelOpen:false
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModel:this.openModel,
                closeModel:this.closeModel
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}