import React, { useState, useEffect } from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import {motion} from 'framer-motion'
function Header({ isAuth }) {
  const [Isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!Isopen);
    document.body.style.overflow = Isopen ? "auto" : "hidden"; // Disable scrolling when navbar is open
  };

  return (
    <div className="w-full flex justify-between items-center px-10 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white ">
      <div className="right flex">
        <h1 className="text-4xl font-semibold">
          Ease<span className="text-yellow-400">Learn</span>
        </h1>
      </div>
      <div className="left hidden sm:block text-lg tracking-tighter">
        <div className="links flex gap-6">
          <NavLink
            className="text-xl font-medium transition-colors duration-200 hover:text-yellow-400"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-xl font-medium transition-colors duration-200 hover:text-yellow-400"
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className="text-xl font-medium transition-colors duration-200 hover:text-yellow-400"
            to="/about"
          >
            About
          </NavLink>
          {isAuth ? (
            <NavLink
              className="text-xl font-medium transition-colors duration-200 hover:text-yellow-400"
              to="/account"
            >
              Account
            </NavLink>
          ) : (
            <NavLink
              className="text-xl font-medium transition-colors duration-200 hover:text-yellow-400"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {Isopen ? (
        <>
          <RiCloseFill
            onClick={toggleMenu}
            className="text-3xl text-white cursor-pointer z-50 fixed top-6 right-6"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-[75vw] sm:w-[50vw] bg-gradient-to-r from-blue-500 to-indigo-600 z-40 flex flex-col justify-center items-start p-8"
          >
            <h2 className="text-3xl text-white font-semibold mb-8">
              Ease<span className="text-yellow-400">Learn</span>
            </h2>
            <NavLink
              className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-yellow-400"
              to="/"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-yellow-400"
              to="/courses"
              onClick={toggleMenu}
            >
              Courses
            </NavLink>
            <NavLink
              className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-yellow-400"
              to="/about"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            {isAuth ? (
              <NavLink
                className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-yellow-400"
                to="/account"
                onClick={toggleMenu}
              >
                Account
              </NavLink>
            ) : (
              <NavLink
                className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-yellow-400"
                to="/login"
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            )}
          </motion.div>
        </>
      ) : (
        <RiMenu3Fill
          onClick={toggleMenu}
          className="text-3xl text-white sm:hidden cursor-pointer z-50"
        />
      )}
    </div>
  );
}

export default Header;