import React from 'react'
import { FaGithub } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";

export default function Card() {
    return (
        <div className='bg-white'>
            <div className='card bg-gray-100 mx-4 md:mx-10'>
                <div className='flex flex-col lg:flex-row p-6 lg:p-10'>
                    <div className='lg:mx-10 xl:mx-20'>
                        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-blue-500 mb-4'>
                            Improve your coding skills <br /> by building realistic <br /> projects
                        </h1>
                        <p className='mb-4 text-sm md:text-md text-black'>
                            Our professionally designed challenges help you gain hands-on <br />
                            experience writing HTML, CSS, and JavaScript. We create the <br />
                            designs so you can focus on the code and see your skills <br /> skyrocket
                        </p>
                        <div className='flex'>
                            <button className='btn bg-red-600 border-0 rounded-full w-full md:w-72 text-white text-lg font-semibold hover:bg-red-700 mb-8 mt-5 flex items-center justify-center gap-2'>
                                <a href="https://github.com/VisnuGupta0007/VisnuGupta0007" target="_blank" rel="noopener noreferrer">
                                    Log in with GitHub
                                </a>
                                <FaGithub />
                            </button>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
                            <img className='h-16' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-community-avatars.webp&w=384&q=75" alt="Community Avatars" />
                            <p className='text-black text-center sm:text-left'>
                                Join <span className='text-blue-600'>914,672</span> developers building projects,<br />
                                reviewing code, and helping each other <br /> improve.
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <img className="h-60 md:h-80 lg:h-96 w-full object-contain" src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hero.webp&w=1920&q=75" alt="Hero" />
                    </div>
                </div>

                {/* Testimonials */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-6 p-6 lg:p-20'>
                    <div className='card border-2 p-5 bg-white w-full md:w-1/2'>
                        <VscQuote className='text-2xl text-blue-600' />
                        <p className='text-black mt-2'>
                            I highly recommend Frontend Mentor. Skip the search <br />
                            for project ideas and dive into ready-made challenges <br />
                            that help you level up as a developer.
                        </p>
                        <img className='h-12 w-12 rounded-full mt-4 mx-auto' src="https://www.frontendmentor.io/static/images/home-avatar-kevin.webp" alt="Kevin" />
                        <h1 className='text-blue-600 font-bold text-center mt-2'>Kevin Powell</h1>
                        <h5 className='text-gray-600 text-center'>Web Developer & YouTuber</h5>
                    </div>
                    <div className='card border-2 p-5 bg-white w-full md:w-1/2'>
                        <VscQuote className='text-2xl text-blue-600' />
                        <p className='text-black mt-2'>
                            Frontend Mentor is a win-win. You can sharpen your <br />
                            skills building websites and add finished projects to <br />
                            your portfolio to help land a job!
                        </p>
                        <img className='h-12 w-12 rounded-full mt-4 mx-auto' src="https://www.frontendmentor.io/static/images/home-avatar-jessica.webp" alt="Jessica" />
                        <h1 className='text-blue-600 font-bold text-center mt-2'>Jessica Chan</h1>
                        <h5 className='text-gray-600 text-center'>Web Developer & YouTuber</h5>
                    </div>
                </div>

                {/* Logos */}
                <h1 className='text-center font-bold text-black text-xl md:text-2xl mt-10'>As featured on...</h1>
                <div className='flex flex-wrap justify-center gap-40 p-6'>
                    <img className='border border-gray-300 bg-white rounded-md p-3 cursor-pointer w-40' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-css-tricks.svg&w=256&q=75" alt="CSS Tricks" />
                    <img className='border border-gray-300 bg-white rounded-md p-3 cursor-pointer w-40' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-product-hunt.svg&w=256&q=75" alt="Product Hunt" />
                    <img className='border border-gray-300 bg-white rounded-md p-3 cursor-pointer w-40' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-stack-overflow.svg&w=256&q=75" alt="Stack Overflow" />
                </div>
            </div>
        </div>
    );
}
