import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/food logo.png'
const Login = ({modelClose}) => {
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
        modelClose(false)
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

    
    <div className=' bg-[#111827] pt-20 z-10' >
        <div className='mx-auto my-auto bg-white blur-none  border h-[507px] px-10 w-[443px]'>
  <button className='bg-[#1D4109] text-white w-5 h-5 mt-3' onClick={ () => {
        modelClose(false)
      }} > X </button>
            <img src={logo} alt="logo" height='50px' width='50px' className='mt-10 mx-auto'/>
            
            <h1 className='text-[#1D4109] font-bold'>Welcome to Tech Arion</h1>
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