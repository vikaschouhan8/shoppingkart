import React from 'react';
import {Link} from 'react-router-dom'

const CartTotals = ({value}) => {
    const {cartSubTotal, cartTax, clearCart, cartTotal} = value;
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mp-3 px-5"
                        onClick={()=>clearCart()}>Clear Cart</button>
                    </Link>
                    <h5>
                        <span className="text-tit">
                            Sub total :
                        </span>
                        <strong>{cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-tit">
                            Cart Tax :
                        </span>
                        <strong>{cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-tit">
                            Total :
                        </span>
                        <strong>{cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default CartTotals