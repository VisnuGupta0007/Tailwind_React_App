import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
// import { FaCaretDown } from 'react-icons/fa'
// import { useParams } from 'react-router-dom';

function Contact() {
  
 
  return (
    
  
   <main className=' bg-slate-500 p-10'>
    <div className=' text-white capitalize font-bold p-3 '>
        <h1 className=' text-4xl font-extrabold '>contact us</h1>
        <h1>fill the form to start a conversation</h1>
        <a><h1 className=' flex items-center gap-3  p-3'><CiLocationOn />south extension, new delhi(india)</h1></a>
        <a><h1 className='flex items-center gap-3  p-3'><IoMdCall />+91-100-200-3001</h1></a>
        <a><h1 className=' flex items-center gap-3  p-3'><IoIosMail /> contact@gmail.com</h1></a>
    </div>
    <div className=' capitalize text-white font-bold p-5 '>
        <label htmlFor="">full name</label><br />
        <input type="text" placeholder='mr/ms' className='inp p-3 text-black'/><br />
        <label htmlFor="">email address</label><br />
    <input type="email" placeholder='abc@gmail.com' className='inp p-3 text-black' /><br /><br />
    <button className='btn btn-success '>submit</button>
    </div>
   </main>
  )
}

export default Contact