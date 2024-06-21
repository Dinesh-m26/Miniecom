import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../App';

export const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amount), 0));
  }, [cart]);

  const handleRemove = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  
  return (
    <div className='bg-[#264653] text-white m-5 p-5 rounded '>
       <div className='mt-5'>
        <h1 className='bg-[#2a9d8f] mx-auto w-max p-3 mb-3 text-center text-xl text-white rounded'>
          Total Amount: Rs {total}
        </h1>
      </div>
      <div className='grid md:grid-cols-3  grid-cols-1 gap-4 '>
        {cart.map((product) => (
          <div key={product.id} className='bg-[#e76f51] p-3 rounded'>
            <h1 className='text-xl text-[#FFF3B0]'>{product.name}</h1>
            <p className='text-lg'>{product.foodType}</p>
            <p className='text-lg'>{product.shopName}</p>
            <p className='text-lg'>Rs: {product.amount}</p>
            <button onClick={() => handleRemove(product.id)} className='bg-[#c1121f] text-white py-1 px-3 rounded mt-2'>Remove</button>
          </div>
        ))}
      </div>

      <p className='text-center mt-5'>Developed by <span><a href="https://mdinesh.netlify.app/" target='_blank' className='text-[#126782]'>Dinesh</a></span></p>
     
    </div>
  );
};
