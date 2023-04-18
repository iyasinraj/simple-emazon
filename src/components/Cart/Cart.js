import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    console.log(props.cart)
    const {price} = props.cart
    return (
        <div className='cart'>
            <p>Selected Items: {props.cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${props.cart.length}</p>
            <p>Tax: ${props.cart.length}</p>
            <p>Grand Total: ${props.cart.length}</p>
            <div className='cart-btn'>
                <button className='clear-cart'>Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                <button className='review-order'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;