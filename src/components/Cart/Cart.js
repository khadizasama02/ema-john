import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=>total + prd.price,0);
    //  let total = 0;
    // for(let i = 0;i<cart.length;i++)
    // {
    //     const product = cart[i];
    //     total = total+product.price;
    // }
    let shipping = 0;
    if(total>35)
    {
        shipping = 0;
    }
    else if(total>15)
    {
        shipping = 4.99;
    }
    else if(total>0)
    {
        shipping=12.99;
    }
    const tax = Math.round(total*.1);
    const grandTotal = total+shipping+tax;
    return (
        <div>
          <h4>order summery</h4>
          <p>items ordered: {cart.length}</p>  
          <p>total price: {total}</p>
          <p><small>shipping cost: {shipping}</small></p>
          <p><small>tax: {tax}</small></p>
          <h5>grand total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;