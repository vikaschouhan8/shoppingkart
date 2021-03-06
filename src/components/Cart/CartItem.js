import React from 'react';

const CartItem = ({item, value}) => {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" style={{width:'5rem', height:'5rem'}}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product:</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price:</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" disabled={(count>1)?false:true}
                                                            
                    onClick={()=>decrement(id)}>
                        -
                    </span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1"
                    onClick={()=>increment(id)}>
                        +
                    </span>
                </div>
            </div>            
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-ico">
                    <i className="fas fa-trash" onClick={()=>removeItem(id)}></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <span className="d-lg-none">Total:</span>
                {total}
            </div>
        </div>
    );
}

export default CartItem;
