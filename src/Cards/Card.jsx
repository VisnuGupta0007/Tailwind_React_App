import React from 'react'
import { FaGithub } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { PiShootingStarLight } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function Card() {
    return (
         <>

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

            <div className='flex justify-center p-20 gap-24 bg-white'>
                <div>
                    <img className='h-96' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-1.webp&w=1080&q=75" alt="" />
                </div>
                <div className='mt-10'>
                    <img className='h-10 ' src="https://tse4.mm.bing.net/th?id=OIP.QbDaZbf_rJkDfV2VUqIiLQHaHa&pid=Api&P=0&h=180" alt="" />
                    <h1 className='text-black text-3xl mt-28 '>Escape tutorial hell</h1>
                    <p className='mt-10 text-gray-800'>Add projects to your learning journey and put your knowledge to the <br />
                        test. The real learning happens when you start solving real-world <br />
                        problems yourself.</p>
                </div>
            </div>
            {/* ////////////////////////////////////////////////// */}
            <div className='flex justify-center p-20 gap-24 bg-white'>
                <div className='mt-10'>
                    <img className='h-10 border rounded-full' src="https://tse2.mm.bing.net/th?id=OIP.d8kE5aEtYNJKF3r5bKTiMgHaGN&pid=Api&P=0&h=180" alt="" />
                    <h1 className='text-black text-3xl mt-28'>Build portfolio-worthy projects</h1>
                    <p className='mt-10 text-gray-800'>Design is hard. We take care of the project ideas and design so you <br />
                        can focus on the coding. You’ll end up with an incredible portfolio of <br />
                        stunning projects!</p>
                </div>
                <div>
                    <img className='h-96' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-2.webp&w=1080&q=75" alt="" />
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className='flex justify-center p-20 gap-24 bg-white'>
                <div>
                    <img className='h-96' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-3.webp&w=1080&q=75" alt="" />
                </div>
                <div className='mt-10'>
                    <img className='h-10 border rounded-full ' src="https://tse3.mm.bing.net/th?id=OIP.4TcP0b6jP-nhseoLfPsnTAHaEa&pid=Api&P=0&h=180" alt="" />
                    <h1 className='text-black text-3xl mt-28 '>Banish impostor syndrome</h1>
                    <p className='mt-10 text-gray-800'>We’ve all felt out of our depth before. Getting hands-on experience is <br />
                        an incredible way to build confidence, refine your workflow, and <br />
                        supercharge your learning.</p>
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className='flex justify-center p-20 gap-24 bg-white'>
                <div className='mt-10'>
                    <img className='h-10 border rounded-full' src="https://tse3.mm.bing.net/th?id=OIP.6Rw9KzV1BM4ahImMI01FNAHaHw&pid=Api&P=0&h=180" alt="" />
                    <h1 className='text-black text-3xl mt-28'>Practice new tools</h1>
                    <p className='mt-10 text-gray-800'>The front-end landscape changes constantly. Our design-led <br />
                        challenges let you pick your tools to help you adapt, experiment, and <br />
                        keep up with the latest trends</p>
                </div>
                <div>
                    <img className='h-96' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-4.webp&w=1200&q=75" alt="" />
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className='flex justify-center p-20 gap-24 bg-white'>
                <div>
                    <img className='h-96' src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-benefit-5.webp&w=1200&q=75" alt="" />
                </div>
                <div className='mt-10'>
                    <img className='h-10 border rounded-full ' src="https://tse4.mm.bing.net/th?id=OIP.0y2Quo_V86HCZ2x-n_VljQHaGH&pid=Api&P=0&h=180" alt="" />
                    <h1 className='text-black text-3xl mt-28 '>Create job opportunities</h1>
                    <p className='mt-10 text-gray-800'>We have a Hiring Platform that runs alongside this platform. Just by <br />
                        building projects and engaging with the community, you could open <br />
                        up job opportunities!</p>
                </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////// */}


            <div className="bg-white text-black px-6 py-10">
                {/* HOW IT WORKS */}
                <div className="bg-zinc-100 p-6 md:p-10 lg:px-40 rounded-xl">
                    <h1 className="text-3xl md:text-4xl mb-4 text-center lg:text-left">How it works</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
                        <div className="space-y-4 w-full">
                            {[
                                { icon: <Fa1 />, text: "Choose your challenge" },
                                { icon: <Fa2 />, text: "Code the design" },
                                { icon: <Fa3 />, text: "Submit your solution" },
                                { icon: <Fa4 />, text: "Give others feedback" }
                            ].map(({ icon, text }, i) => (
                                <p key={i} className="flex items-center border-2 p-3 rounded-lg gap-5 shadow-lg cursor-pointer bg-white">
                                    <span className="bg-cyan-500 p-2 border rounded-full">{icon}</span> {text}
                                </p>
                            ))}
                        </div>
                        <div className="w-full max-w-xs lg:max-w-sm">
                            <img
                                src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-4.webp&w=1200&q=100"
                                alt="How it works illustration"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* PRO SUBSCRIPTION */}
                <div className="text-center bg-white py-16 px-4">
                    <h1 className="text-black text-2xl md:text-3xl font-medium">
                        Take your skills to the next level <br />
                        with our <span className="bg-blue-500 text-white rounded-lg text-2xl font-bold px-2">PRO</span> subscription
                    </h1>
                    <p className="text-gray-600 mt-5 text-lg">
                        Step into the shoes of a professional developer and build projects in <br className="hidden md:block" />
                        the most realistic way possible. Our Pro subscription will help you <br className="hidden md:block" />
                        prepare for life as a professional developer.
                    </p>
                </div>

                {/* PREMIUM FEATURES */}
                <div className="bg-slate-100 flex flex-col lg:flex-row justify-between gap-6 px-6 md:px-20 lg:px-40 py-10">
                    {[
                        {
                            icon: <PiShootingStarLight />,
                            title: "Tackle our premium challenges",
                            desc: "Our premium challenges are the most realistic, comprehensive practice projects you’ll find. They also make incredible portfolio pieces to help you “wow!” recruiters and get hired."
                        },
                        {
                            icon: <FaFigma />,
                            title: "Access each challenge’s design file",
                            desc: "Professional teams use tools like Figma. By using these tools when building projects, you’ll save time, create more accurate solutions, and gain hands-on experience working like a pro."
                        }
                    ].map(({ icon, title, desc }, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex-1">
                            <div className="text-5xl text-blue-500 flex justify-center mb-4">{icon}</div>
                            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-black">{title}</h1>
                            <p className="text-gray-800 text-lg text-center">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* FAQs */}
                <div className="flex flex-col items-center bg-slate-100 px-6 py-10">
                    <h1 className="text-3xl md:text-5xl mb-6 font-sans text-black">FAQs</h1>
                    {[
                        "Is it free?",
                        "Can I use these projects in my portfolio?",
                        "Can I take the challenges as a beginner?",
                        "How do I start?",
                        "How can I get help if I'm stuck on a challenge?",
                        "Can I use libraries/frameworks on these projects?",
                        "Am I guaranteed to get hired through the Hiring Platform?"
                    ].map((question, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between border w-full max-w-md h-14 cursor-pointer rounded-lg px-4 py-2 bg-white mt-5 border-gray-300"
                        >
                            <p className="text-black font-semibold">{question}</p>
                            <MdAdd className="text-3xl text-black" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Community Section */}
            <div className="flex flex-col items-center text-center bg-white px-6 py-10">
                <h2 className="text-blue-500 text-2xl md:text-4xl font-semibold max-w-3xl">
                    Join 1,007,104 people building <br className="hidden md:block" />
                    portfolio-worthy projects
                </h2>
                <p className="mt-5 text-gray-500 text-lg max-w-2xl">
                    Our highly supportive, positive community is here to help you improve your skills. <br className="hidden md:block" />
                    We all try to help each other out wherever possible. We’d love to welcome you to <br className="hidden md:block" />
                    our community!
                </p>
                <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-blue-600 transition-colors border-0 rounded-full w-72 text-white text-lg font-semibold mt-10 mb-5 py-3">
                    <a href="https://github.com/VisnuGupta0007/VisnuGupta0007">Log in with GitHub</a>
                    <FaGithub />
                </button>
            </div>

            {/* Hiring Section */}
            <div className="bg-indigo-800 flex flex-col-reverse lg:flex-row items-center px-6 md:px-20 py-10 lg:py-20 gap-10">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-white text-center lg:text-left">
                        Are you looking to hire talented, passionate developers?
                    </h2>
                    <p className="text-white text-lg mt-6 text-center lg:text-left">
                        Our Hiring Platform helps you connect with our diverse community of talented early-career developers.
                        Stop wading through hundreds of resumes and get chatting to skilled developers in minutes.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="px-8 py-3 mt-10 border-0 bg-white font-bold rounded-full text-indigo-800 hover:bg-gray-200 transition-all">
                            START HIRING DEVELOPERS
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hiring.webp&w=1080&q=100"
                        alt="Hiring"
                        className="w-full max-w-sm md:max-w-md lg:max-w-full"
                    />
                </div>
            </div>
        </>
    );
}
