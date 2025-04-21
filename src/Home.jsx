import React from 'react'
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

function Home() {
 
    return (
  <nav className=' flex capitalize bg-slate-900 justify-around p-2'>
      <a className='btn btn-outline'>
          <h1 className=' flex text-xl items-center gap-2'><Link to="/home" className='flex items-center'><IoMdHome />home</Link></h1>
      </a>
      <div className=' flex gap-5 ' >
          <h1  className='btn btn-outline  hover:animate-bounce'><Link to="/about">About</Link> </h1>
          <h1 className='btn btn-outline hover:animate-bounce'><Link to="/contact">Contact</Link></h1>
          {/* <h1 className='btn btn-outline hover:animate-bounce'><Link to="/service">Service</Link> </h1> */}
          <h1 className='btn btn-outline hover:animate-bounce'><Link to="/login">Login</Link></h1>
          <h1 className='btn btn-outline hover:animate-bounce'><Link to="/register">Register</Link></h1>
          
      </div>
  
   </nav>
  
    )
  }
  


export default Home