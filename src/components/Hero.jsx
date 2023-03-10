import React from 'react'
import Pic1 from '../assets/unsplash.jpg'
const Hero = () => {
  return (
    <>
    
    <div className='h-[680px] py-[250px] grid grid-cols-2 w-full text-white bg-gray-900' style={{ 
      backgroundImage: `url(${Pic1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:"contain",
      
    }}  >
      {/* <img src={Pic1} alt="" /> */}

    <div> </div>
    <div className='px-[100px]' >
    <h1 className='font-alice text-4xl my-4'>DESSERT | BAR | KITCHEN</h1>
        <h1 className='font-gabriela text-xl '>The Barn is a global food experience and our dessert bar is legendary!</h1>

        <button className='bg-[#C5B5A6] font-gabriela shadow-lg text-[#000000] hover:bg-white hover:text-black px-4 py-2 my-6 rounded-2xl'>Contact Us</button>
        

    </div>

    </div>
    </>
  )
}

export default Hero