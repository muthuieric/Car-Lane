import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 bg-purple-500 z-10">
        <NavLink to="/" className="text-white font-bold text-2xl">VisonaryGerm</NavLink>
        <div className={`flex flex-col md:flex-row md:space-x-4  ${open ? 'block' : 'hidden md:block'}`}>
          <NavLink exact to="/" className="navlink" activeClassName="bg-purple-600">Home</NavLink>
          <NavLink to="/art" className="navlink" activeClassName="bg-purple-600">Art</NavLink>
          <NavLink to="/contacts" className="navlink" activeClassName="bg-purple-600">Contacts</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
