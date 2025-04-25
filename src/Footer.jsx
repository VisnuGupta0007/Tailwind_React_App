import React from 'react';
import { FaDiscord, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="bg-white text-black">
            {/* Logo and Socials */}
            <div className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20 gap-10">
               

                <div className="flex text-3xl gap-7 text-cyan-500">
                    <FaDiscord className="cursor-pointer hover:text-gray-400" />
                    <FaXTwitter className="cursor-pointer hover:text-gray-400" />
                    <FaLinkedin className="cursor-pointer hover:text-gray-400" />
                    <FaFacebook className="cursor-pointer hover:text-gray-400" />
                </div>
            </div>

            {/* Newsletter and Links */}
            <div className="flex flex-col lg:flex-row gap-10 justify-between px-6 md:px-20 pb-14">
                {/* Newsletter */}
                <div className="w-full lg:w-[40%]">
                    <h2 className="text-2xl font-semibold text-indigo-800">Stay up to date</h2>
                    <p className="mt-4 text-md text-gray-700">
                        With new challenges, featured solutions, selected articles, and our latest news
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            className="flex-1 bg-white border-2 border-gray-300 h-10 px-4 rounded-lg outline-none"
                            placeholder="email@example.com"
                        />
                        <button className="btn bg-red-600 border-0 rounded-full text-white font-semibold px-6 py-2 hover:bg-red-700 transition-all">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full text-sm">
                    <ul>
                        <li className="font-bold mb-3">FRONTEND MENTOR</li>
                        <li className="capitalize text-gray-500 mb-1">unlock pro</li>
                        <li className="capitalize text-gray-500 mb-1">contact us</li>
                        <li className="capitalize text-gray-500 mb-1">FAQs</li>
                        <li className="capitalize text-gray-500">become a partner</li>
                    </ul>

                    <ul>
                        <li className="font-bold mb-3">EXPLORE</li>
                        <li className="capitalize text-gray-500 mb-1">learning paths</li>
                        <li className="capitalize text-gray-500 mb-1">challenges</li>
                        <li className="capitalize text-gray-500 mb-1">solution</li>
                        <li className="capitalize text-gray-500">articles</li>
                    </ul>

                    <ul>
                        <li className="font-bold mb-3">COMMUNITY</li>
                        <li className="capitalize text-gray-500 mb-1">discord</li>
                        <li className="capitalize text-gray-500">guidelines</li>
                    </ul>

                    <ul>
                        <li className="font-bold mb-3">FOR COMPANIES</li>
                        <li className="capitalize text-gray-500 mb-1">hire developers</li>
                        <li className="capitalize text-gray-500">train developers</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
