import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[7vh] w-full Navbar  fixed top-0 z-100  flex items-center justify-between px-6 shadow-md">
      <Link className="logo" to={'/'}>
        <h1 className="text-md md:text-lg lg:text-xl  font-semibold text-gray-800">
          The Coding School
        </h1>
      </Link>
      <div className="nav flex items-center justify-center gap-6 pr-8">
        <NavLink to={'/html'} className={({isActive})=>
        isActive ?
        'underline underline-offset-4' : ''
        }>HTML</NavLink>
        <NavLink to={'/about'} className={({isActive})=>
        isActive ?
       'underline underline-offset-4' : ''
        }>ABOUT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
