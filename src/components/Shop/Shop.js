import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [cart, setCart] = useState([])

    const addToCart = (selectedProduct) =>{
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(() => {
        const shoppingCart = getShoppingCart()
        const savedCart = []
        for(const id in shoppingCart){
            const storedProduct = products.find(product => product.id === id)
            if(storedProduct){
                const quantity = shoppingCart[id]
                storedProduct.quantity = quantity
                savedCart.push(storedProduct)
            }
        }
        setCart(savedCart)
    },[products])
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