import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 bg-purple-500 z-10">
        <NavLink to="/" className="text-white font-bold text-2xl">VisonaryGerm</NavLink>
        <div className="space-x-4">
          <NavLink exact to="/" className=" text-white text-xl font-medium hover:bg-purple-600 px-4 py-2 rounded" activeClassName="bg-purple-600">Home</NavLink>
          <NavLink to="/art" className="text-white text-xl font-medium hover:bg-purple-600 px-4 py-2 rounded" activeClassName="bg-purple-600">Art</NavLink>
          <NavLink to="/contacts" className="text-white text-xl font-medium hover:bg-purple-600 px-4 py-2 rounded" activeClassName="bg-purple-600">Contacts</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
