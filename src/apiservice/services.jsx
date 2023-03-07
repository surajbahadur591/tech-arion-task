import axios from "axios"

export const getProduct = async(token) => {
    try {
        return await axios.get(`https://admin.gifinfinity.com/products/api/client/v1/products-list/`, {
            headers: { Authorization: `Bearer ${token}` },
          });
    }
    catch (err){
        console.log('error calling get product API')
    }
    

}

    
        
    
