
// import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import Hero2 from './components/Hero2'
import { Routes, Route } from 'react-router-dom';

function App() {

  
  // const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzgwNTY5LCJpYXQiOjE2NzgxODg1NjksImp0aSI6IjAyYTg5OGM2YTk3ZDRjY2ZhMTQwODg1NzRiNmIxYWJhIiwidXNlcl9pZCI6Mn0.OAXYyT_uUvmwT0Pv3GQ1ZqxZrYbSUb9JgbTiZsmWrw8'
  const token = localStorage.getItem("token")
  

  return (
    <>

      <Navbar/>
      <Hero />
      {token ? <Products/> : <Hero2/>}
    
      <Footer/>
      

    </>
  );
}

export default App;
