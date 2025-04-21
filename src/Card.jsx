import React from 'react'
import { FaGithub } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";

export default function Card() {
        return (
                <>
                <div className='bg-white'>
                        <div className='card bg-gray-100 mx-5'>
                        <div className='flex p-7' >
                                <div className='mx-20'>
                                        <h1 className='font-semibold text-4xl text-blue-500 mb-4'>Improve your coding skills <br /> by building realistic <br /> projects</h1>
                                        <p className='mb-4 text-md text-black'>  Our professionally designed challenges help you gain hands-on <br />
                                                experience writing HTML, CSS, and JavaScript. We create the <br />
                                                designs so you can focus on the code and see your skills <br /> skyrocket</p>
                                        <div className='flex'>
                                                <button className='btn btn-error rounded-full hover:btn-primary mb-5 '><a href="https://github.com/VisnuGupta0007/VisnuGupta0007">Log in with GitHub</a><FaGithub /></button>
                                        </div>
                                        <div className='flex gap-4'>
                                                <img className='h-16 '
                                                        src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-community-avatars.webp&w=384&q=75"
                                                        alt="Community Avatars"></img>
                                                <p className='text-black'>Join <span className='text-blue-600'>914,672</span>  developers building projects,<br /> reviewing code, and
                                                        helping each other <br /> improve.</p>
                                        </div>
                                </div>
                                <div>
                                        <img className=" h-96"
                                                src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hero.webp&w=1920&q=75"
                                                alt="Hero Image"></img>
                                </div>
                        </div>

                        <div className=' flex items-center justify-between p-20  '>
                                <div className='card border-solid border-2 p-3  bg-white'>
                                        <ul>
                                                <li className='flex '><VscQuote /></li>
                                        </ul>
                                        <p className='text-black'>I highly recommend Frontend Mentor. Skip the search <br />
                                                for project ideas and dive into ready-made challenges <br />
                                                that help you level up as a developer.</p>
                                        <img className='flex  h-12 w-12 justify-center mx-auto rounded-full mt-4  ' src="https://www.frontendmentor.io/static/images/home-avatar-kevin.webp" alt="" />
                                        <h1 className='text-blue-600 font-bold text-center '>Kevin Powell</h1>
                                        <h5 className='text-gray-600 text-center'>Web Developer & YouTuber</h5>
                                </div>
                                <div className=' card border-solid border-2 p-3  bg-white flex '>
                                        <ul>
                                                <li className='flex '><VscQuote /></li>
                                        </ul>
                                        <p className='text-black'>Frontend Mentor is a win-win. You can sharpen your <br />
                                                skills building websites and add finished projects to <br />
                                                your portfolio to help land a job!</p>
                                        <img className='h-12 w-12 rounded-full mt-4 flex justify-center mx-auto ' src="https://www.frontendmentor.io/static/images/home-avatar-jessica.webp" alt="" />
                                        <h1 className='text-blue-600 font-bold text-center  '>Jessica Chan</h1>
                                        <h5 className='text-gray-600 text-center'>Web Developer & YouTuber</h5>
                                </div>
                        </div>
                        </div>

                        <h1 className='text-center font-bold text-black'>As featured on...</h1>
                        <div className='flex justify-around p-10 '>
                                <img className='border  border-gray-300  bg-white rounded-md p-3 cursor-pointer' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-css-tricks.svg&w=256&q=75" alt="" />
                                <img className='border border-gray-300 bg-white rounded-md p-3 cursor-pointer' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-product-hunt.svg&w=256&q=75" alt="" />
                                <img className='border  border-gray-300 bg-white rounded-md p-3 cursor-pointer' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-stack-overflow.svg&w=256&q=75" alt="" />
                        </div>
                        </div>
                    
                </>

        )
}
