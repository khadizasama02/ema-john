import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const{img,name,seller,price,stock} = props.products;
    return (
        <div className="products">
            <div>
             <img src={img}/>
            </div>
            <div>
            <h4>{name}</h4>  
            <p>{seller}</p>
            <p>{price}</p>
            <p>only {stock} left in stock</p>
            <button onClick={() => props.handleAddProduct(props.products)}
            className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
         
        </div>
    );
};

export default Product;