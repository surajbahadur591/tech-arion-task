import React, { useState } from 'react'
import Login from './Login'
import foodlogo from '../assets/food logo.png'
import { motion } from 'framer-motion'
const Navbar = () => {
  const  [modelOpen, setModelOpen] = useState(false)
  return (
    <>
    
    <motion.div className='bg-[#EAE9E4] flex justify-center items-center sm:gap-20 font-merri   md:gap-24 h-[79px] sm:px-10 '>

      
      <motion.button  className=' hover:text-[#737373] hover:scale-125 '  onClick={ () => {
        setModelOpen(true)
      }}>LOGIN</motion.button>
        
        <h1 className='hidden md:block hover:text-[#737373] hover:scale-125 '>RESERVATIONS</h1>
        <h1 className='hidden md:block  hover:text-[#737373] hover:scale-125  '>PRIVATE PARTIES</h1>
        <img className='bg-[#EAE9E4] rounded-[50%] px-4 mt-8' width='160px' height='160px' src={foodlogo} alt="LOGO" />
        
        <h1 className='hidden md:block hover:text-[#737373] hover:scale-125  '>EVENTS</h1>
        <h1 className='hidden md:block hover:text-[#737373] hover:scale-125  '>CONTACT US</h1>
        <h1 className='hover:text-[#737373] hover:scale-125 '>ABOUT US</h1>



    </motion.div>
    {modelOpen && <Login modelClose={setModelOpen}></Login>}
    </>
  )
}

export default Navbar