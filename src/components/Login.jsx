import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formValue, setformValue] = React.useState({
        phone: '',
        otp: ''
      });

      const history = useNavigate();

      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
        console.log(event)
      }
      const onLogin = async (event) => {
        // we will fill this in the coming paragraph
        const data =await handleSubmit()
        const token = data.data.access
        localStorage.setItem("token", token)
        history("/")
      }


      const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("phone", formValue.phone)
        loginFormData.append("otp", formValue.otp)
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/",
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });

          return response
        } catch(error) {
          console.log(error)
        }
      }

  return (

    
    <div>
        <div className='mx-auto my-auto bg-white border h-[407px] px-10 w-[443px]'>
            <img src="" alt="logo" />
            <h1 className='text-[#1D4109] font-bold'>Welcome to Techarion</h1>
            <h1 className='py-4'>Please sign-in to your account and start the adventure</h1>
    <label htmlFor="phone">Phone</label>
    <input onChange={handleChange} className='w-full border-gray-500 border py-1 ' type="text" name="phone" id="" placeholder=''></input>
    <label htmlFor="otp">OTP</label>
    <input onChange={handleChange} className='w-full border-gray-500 border py-1' type="text" name="otp" id="" placeholder=''></input>
    <button onClick={onLogin} className='w-full bg-[#1D4109] text-white py-1 my-2'>Login</button>
    <h1 className='w-full'  >social media icons</h1>
        </div>
    </div>
  )
}

export default Login