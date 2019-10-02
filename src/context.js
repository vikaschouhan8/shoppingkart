import React, { Component } from 'react'
import dlog from './Debug'

import { storeProducts, detailProduct, sideNavLinks} from './data'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        productType: "Laptops",
        detailProduct: detailProduct,
        cart: [],
        modelOpen: false,
        modelProduct: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        links:sideNavLinks,
        sidenavOpen: false
    }

    componentDidMount() {
        this.setProducts()
    }

    getProductType = (productType) => {
        dlog(productType)
        this.setState(()=>{
            return {productType:productType.link}
        },
        ()=>{
            this.setProducts()
        }
        )
        // console.log("getProductType after", productType)
    }


    setProducts = () => {

        let tempProduct = []
        storeProducts[this.state.productType].forEach(item => {
            const singleItems = { ...item }
            tempProduct = [...tempProduct, singleItems]
        })
        this.setState(() => {
            return { products: tempProduct }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = (id) => {
        const details = this.getItem(id)
        this.setState(() => {
            return {
                detailProduct: details
            }
        })
    }

    // Cart Mathods
    // 19th sepetember 2019
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedItem = tempCart.find(item => item.id === id);
        //Find the index of that items
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index]; // Get the product
        product.count += 1; // update the count and the new total
        product.total = product.price * product.count;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals() // update the cart total 
        })
    }
    // 19th sepetember 2019
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedItem = tempCart.find(item => item.id === id);
        //Find the index of that items
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index]; // Get the product
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals() // update the cart total 
            })
        }
    }
    //19 september
    removeItem = (id) => {
        // console.log("remove item method");
        // Detele the current item by Updating the cart with removing the 
        // item from cart i.e. Appling filter() on that id from the cart 
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id);


        // Now Update the value in the Main Products data to
        // default i.e. set count, total to 0 and inCart to false
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index]
        removedProduct.count = 0;
        removedProduct.total = 0;
        removedProduct.inCart = false;

        // Update the states of cart and products
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },
            () => {
                this.addTotals()
            }
        )
    }
    clearCart = () => {
        // we can simply clear the cart by setting state.cart=[] , an empty array
        // but only doing this will not set the total amount in the cart to zero
        // as well as we can not add the old items in the cart again, because 
        // their inCart status is set to true, so call addTotals() and 
        // setProducts() methods again

        this.setState(() => {
            return { cart: [] }
        },
            () => {
                this.setProducts();
                this.addTotals()
            }
        )
    }

    addTotals = () => {
        dlog("context addTotals")
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        let tax = subTotal * 0.18; //GST 18%(9% CGST+ 9% SGST)
        tax = parseFloat(tax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
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
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] }//products
        },
            () => {
                this.addTotals();//Cart Item's totle
            }
        )
    }

    // function to open model
    openModel = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {
                modelOpen: true,
                modelProduct: product
            }
        })
    }
    //function to close model Date 15 september 2019
    closeModel = () => {
        this.setState(() => {
            return {
                modelOpen: false
            }
        })
    }

    openSideNav = id => {
        let links = this.state.links;
        // this.setState(()=>{
        //     return {
        //         sidenavOpen: !this.state.sidenavOpen
        //     }
        // })
        this.setState(() => {
            return {
                sidenavOpen: !this.state.sidenavOpen,
                links: links
            }
        })
    }
    //function to close model Date 15 september 2019
    closeSideNav = () => {
        this.setState(() => {
            return {
                sidenavOpen: false
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModel: this.openModel,
                closeModel: this.closeModel,
                // 17 sept: add cart methods
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                //21 september
                openSideNav:this.openSideNav,
                closeSideNav:this.closeSideNav,
                //2 oct
                getProductType:this.getProductType
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
} 

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }