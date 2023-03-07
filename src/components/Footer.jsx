import React from 'react'
import logo from '../assets/food logo.png'

const Footer = () => {
  return (
    <div>
        <div className='bg-black flex-col text-white  text-center'>
        <img src={logo} alt="logo" height='50px' width='50px' className=' mx-auto'/>
            <h1 className='py-1 text-lg font-semibold'>Dessert.Bar.Kitchen</h1>
            <h1 className='py-1'>+040 2355 7261</h1>
            <h1 className='py-1'>savory@qodeinteractive.com</h1>
            <h1 className='py-1 px-[500px]'>Plot No.8-2, 293/82/A/161, Rd Number 13, Jubilee Hills, Hyderabad, Telangana 500033</h1>
            <h1 className='py-1'>Social Media Icons</h1>
            <div className='h-[1px]  w-[90%] mx-auto bg-white'></div>
            <h1 className='py-1'>TECHARION 2023</h1>


        </div>
    </div>
  )
}

export default Footer