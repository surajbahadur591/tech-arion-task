import React, { useState } from 'react'
import Login from './Login'
import foodlogo from '../assets/food logo.png'
const Navbar = () => {
  const  [modelOpen, setModelOpen] = useState(false)
  return (
    <>
    
    <div className='bg-[#EAE9E4] flex justify-center items-center sm:gap-20  md:gap-24 h-[79px] sm:px-10 '>

      
      <button className=' '  onClick={ () => {
        setModelOpen(true)
      }}>LOGIN</button>
        
        <h1 className='hidden md:block '>RESERVATIONS</h1>
        <h1 className='hidden md:block '>PRIVATE PARTIES</h1>
        <img className='bg-[#EAE9E4] rounded-[50%] px-4 mt-8' width='160px' height='160px' src={foodlogo} alt="LOGO" />
        
        <h1 className='hidden md:block '>EVENTS</h1>
        <h1 className='hidden md:block '>CONTACT US</h1>
        <h1 className=''>ABOUT US</h1>



    </div>
    {modelOpen && <Login modelClose={setModelOpen}></Login>}
    </>
  )
}

export default Navbar