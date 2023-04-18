import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='products-container'>
            <div>
                <h1>Products</h1>
                <div className="products">
                    {
                        products.map(product => <Product addToCart={addToCart} product={product}></Product>)
                    }
                </div>
                
            </div>
            <div className="order-list">
            <h1>Order List</h1>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;