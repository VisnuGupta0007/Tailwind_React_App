import React from 'react'
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { PiShootingStarLight } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

export default function Card2() {
    return (
        <>
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
        </>
    )
}
