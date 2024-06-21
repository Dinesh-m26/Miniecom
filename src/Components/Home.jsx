import React, { useState } from 'react'
import data from '../assets/Product.json'
import { Product } from './Product'

export const Home = () => {
    const [Products] = useState(data)

    return (
        <div className='bg-[#E09F3E] flex  flex-wrap justify-center'>
            {
                Products.map((product)=> 
                    (<Product key={product.id} product={product}  />)
                    )
            }

        </div>
    )
}
