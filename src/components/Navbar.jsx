import React, { useState } from 'react'
import Login from './Login'
import foodlogo from '../assets/food logo.png'
const Navbar = () => {
  const  [modelOpen, setModelOpen] = useState(false)
  return (
    <>
    
    <div className='bg-[#EAE9E4] flex justify-center items-center gap-24 h-[79px] '>

      
      <button onClick={ () => {
        setModelOpen(true)
      }}>LOGIN</button>
        
        <h1>RESERVATIONS</h1>
        <h1>PRIVATE PARTIES</h1>
        <img className='bg-[#EAE9E4] rounded-[50%] px-4 mt-8' width='160px' height='160px' src={foodlogo} alt="LOGO" />
        
        <h1>EVENTS</h1>
        <h1>CONTACT US</h1>
        <h1>ABOUT US</h1>



    </div>
    {modelOpen && <Login modelClose={setModelOpen}></Login>}
    </>
  )
}

export default Navbar