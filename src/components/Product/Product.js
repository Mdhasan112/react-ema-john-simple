import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const{name, img, seller, price, stock, key} = props.product

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'> <Link to={"/product/" + key}>{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <br />
                <p>only {stock} left in stock - order soon</p>
                { props.showAddToCard === true && <button onClick={() => props.handleAddProduct(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
            
            
        </div>
    );
};

export default Product;