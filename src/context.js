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
        modelProduct:detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
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

    // Cart Mathods
    increment = (id)=>{
        console.log("Increment method");
    }    
    decrement = (id)=>{
        console.log("decrement method");
    }    
    removeItem = (id)=>{
        console.log("remove item method");
    }    
    clearCart = ()=>{
        console.log("clear cart method");
    }

    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item=>(subTotal+=item.total));
        let tax = subTotal * 0.20;
        tax = parseFloat(tax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
    // End Cart methods

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        const price = product.price;
        product.total = price;
        product.inCart = true;
        product.count = 1;
        this.setState(()=>{
                return {products:tempProducts,cart:[...this.state.cart, product]}
            },
            ()=>{
                this.addTotals();
            }
        )
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
                closeModel:this.closeModel,
                // 17 sept: add cart methods
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}