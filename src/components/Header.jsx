import React from 'react'
import { FiMenu } from "react-icons/fi";

const Header = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <img
                    src='https://res.cloudinary.com/ddectomha/image/upload/v1749188410/logo_z6fpwl.png'
                    className='h-4 w-[125px]'
                />
                <div className='md:hidden'>
                    <FiMenu className='h-6 w-6' />
                </div>
            </div>
            <h4 className='font-bold text-2xl leading-[137%] mb-2 tracking-[-0.8px] align-middle pt-10'>Itineary</h4>
            <p className='font-normal text-base leading-[150%] tracking-normal text-gray-400 pb-6'>Day</p>
        </div>
    )
}

export default Header