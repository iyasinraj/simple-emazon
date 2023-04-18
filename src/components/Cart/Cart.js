import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const {cart} = props
    let total = 0
    let shipping = 0
    let quantity = 0
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2)
    const grandTotal = total + shipping + parseFloat(tax)
    
    return (
        <div className='cart'>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
            <div className='cart-btn'>
                <button className='clear-cart'>Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                <button className='review-order'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;