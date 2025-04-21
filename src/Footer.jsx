import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
 <footer className=' text-white capitalize flex justify-between p-10 bg-slate-800'>
<a className='first' >
    <h1 className=' text-xl font-semibold'>services</h1>
    <h1>branding</h1>
    <h1>design</h1>
    <h1>marketing</h1>
    <h1>advertisement</h1>
</a>
<a className='second'>
    <h1 className=' text-xl font-semibold'>company</h1>
    <h1>about us</h1>
    <h1>contact</h1>
    <h1>jobs</h1>
    <h1>press kit</h1>
</a>
<a className='third'>
    <h1 className='text-xl font-semibold'> social</h1><br />
    <div className=' flex gap-6'>
        <h1 className=' hover:text-yellow-500'><FaTwitter /></h1>
    <h1 className=' hover:text-yellow-500'><FaFacebook /></h1>
    <h1 className=' hover:text-yellow-500'><FaInstagram /></h1>
    <h1 className=' hover:text-yellow-500'><FaYoutube /></h1>
</div>
</a>
 </footer>
  )
}

export default Footer