import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {addToCart} = props;
    const {name, id, img, seller, price, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='info'>
                <p>{name}</p>
                <p><strong>Price: ${price}</strong></p>
                <p><small>Manufacturer : <strong> {seller}</strong></small> <small>Rating: <strong>{ratings} stars</strong></small></p>
            </div>
            <button onClick={() => addToCart(props.product)}>
            <p>Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></p>
            
            </button>
        </div>
    );
};

export default Product;