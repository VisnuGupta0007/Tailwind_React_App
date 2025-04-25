import React from 'react'
import { FaGithub } from "react-icons/fa";

function Card3() {
    return (
        <>
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

export default Card3;
