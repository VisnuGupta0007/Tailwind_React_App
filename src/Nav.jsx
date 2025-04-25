import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-300 text-black">
      <div className="flex items-center justify-between h-20 px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <IoMdHome />
          Home
        </Link>

      
        <div className="hidden md:flex gap-10">
          {['about', 'contact', 'login', 'register'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className="text-xl font-semibold capitalize border-b-4 border-transparent hover:border-red-500 transition-all duration-300"
            >
              {page}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-slate-200 text-lg">
          {['about', 'contact', 'login', 'register'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className="border-b border-gray-300 py-2 hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
