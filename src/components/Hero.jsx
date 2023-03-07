import React from 'react'
import Pic1 from '../assets/unsplash.jpg'
const Hero = () => {
  return (
    <>
    
    <div className='h-[680px] py-[250px] grid grid-cols-2  text-white bg-gray-900' style={{ 
      backgroundImage: `url(${Pic1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:"contain",
      
    }}  >
      {/* <img src={Pic1} alt="" /> */}

    <div> </div>
    <div >
    <h1 className=' text-4xl my-4'>DESSERT | BAR | KITCHEN</h1>
        <h1 className='text-2xl'>The Barn is a global food experience and our dessert bar is legendary!</h1>

        <button className='bg-[#C5B5A6] text-[#000000] px-2 py-1 my-4 rounded-2xl'>Contact Us</button>
        

    </div>

    </div>
    </>
  )
}

export default Hero