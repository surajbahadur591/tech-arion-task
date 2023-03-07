import React, { useEffect, useState } from 'react'
import { getProduct } from '../apiservice/services'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [productDetails , setProductDetails]  = useState([])
    const token = localStorage.getItem("token")
    // const token =''
  
    

    useEffect(()=> {
        getProductService()
      }, [])


      const getProductService = async() => {
    const data = await getProduct(token);
    setProductDetails(data.data.results);
      }


  return (
    <div>
        <div className='bg-[#C5B5A6] max-w-[1440px] '>
            {productDetails.map( (prod)=> {
                return <div className='bg-[#F5F2EF] w-[200px] h-[150px] mx-2 my-2 py-auto px-auto '>
                     <div>{prod.title}</div>
                     <div>{prod.description}</div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default Products