import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({cart}) => {

    return (
        <>

            <div className=' flex bg-[#335C67] py-3 px-2'>
                <div className='text-2xl text-[#FFF3B0]'>
                    FoodCart
                </div >
                <div className='ml-auto my-auto text-[#FFF3B0]'>
                    <Link className='mx-3' to={"/"}>Home </Link>
                    <Link className='mx-3' to={"/Cart"}> {cart.length} Cart </Link>
                </div>

            </div>
        </>

    )
}
