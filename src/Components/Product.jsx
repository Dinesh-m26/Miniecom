import React, { useContext } from 'react';
import { cartContext } from '../App';



export const Product = ({ product }) => {

    const {cart, setCart} = useContext(cartContext)

    const addCart = () => {
        setCart([...cart, product]);
    };

    const deleteCart = () => {
        setCart(cart.filter((d) => d.id !== product.id));
    };

    const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);

    return (
        <div className='bg-[#e76f51] text-white m-3 p-3 rounded w-56 sm:w-96'>
            <div className='flex flex-col sm:flex-row items-center'>
                <div className='flex-1'>
                    <h1 className='text-xl text-[#FFF3B0] break-words'>{product.name}</h1>
                    <p className='text-lg'>{product.foodType}</p>
                    <p className='text-lg'>{product.shopName}</p>
                    <p className='text-lg'>Rs: {product.amount}</p>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                    {
                        isProductInCart ?
                            <button onClick={deleteCart} className='bg-[#c1121f] text-white py-1 px-3 rounded mt-2 sm:mt-0'>
                                Remove from cart
                            </button> :
                            <button onClick={addCart} className='bg-[#2a9d8f] text-white py-1 px-3 rounded mt-2 sm:mt-0'>
                                Add to cart
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};
