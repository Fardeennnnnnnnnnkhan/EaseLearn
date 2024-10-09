import React, { useState, useEffect } from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Header({ isAuth }) {
  const [Isopen, setIsopen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsopen(!Isopen);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`nav h-[10vh] w-full flex justify-between items-center px-10 py-6 bg-white text-black transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="right flex">
        <h1 className="text-4xl font-semibold text-green-400">EaseLearn</h1>
      </div>
      <div className="left hidden sm:block text-lg tracking-tighter">
        <div className="links flex gap-4">
          <NavLink  className="text-xl   " to="/" style={({ isActive }) => ({ color: isActive ? "" : "" })}>Home</NavLink>
          <NavLink  className="text-xl   " to="/courses" style={({ isActive }) => ({ color: isActive ? "" : "" })}>Courses</NavLink>
          <NavLink className="text-xl   " to="/about" style={({ isActive }) => ({ color: isActive ? "" : "" })}>About</NavLink>
          {isAuth ? (
            <NavLink  className="text-xl   " to="/Account" style={({ isActive }) => ({ color: isActive ? "" : "" })}>Account</NavLink>
          ) : (
            <NavLink  className="text-xl   " to="/login" style={({ isActive }) => ({ color: isActive ? "" : "" })}>Login</NavLink>
          )}
        </div>
      </div>
      {Isopen ? (
        <>
          <RiCloseFill onClick={toggleMenu} className="close-icon text-3xl cursor-pointer" />
          <div className={`fixed h-screen inset-0 bg-blue-400 opacity-95 transition-opacity duration-300 z-30 ${Isopen ? 'open' : 'closed'}`} onClick={toggleMenu}>
            <div className="flex flex-col p-9 h-full">
              <NavLink className="text-3xl border-b py-6 border-b-1 border-white" to="/" style={({ isActive }) => ({ color: isActive ? "white" : "" })}>Home</NavLink>
              <NavLink className="text-3xl border-b py-6 border-b-1 border-white" to="/courses" style={({ isActive }) => ({ color: isActive ? "white" : "" })}>Courses</NavLink>
              <NavLink className="text-3xl border-b py-6 border-b-1 border-white" to="/about" style={({ isActive }) => ({ color: isActive ? "white" : "" })}>About</NavLink>
              <NavLink className="text-3xl border-b py-6 border-b-1 border-white" to="/account" style={({ isActive }) => ({ color: isActive ? "white" : "" })}>Account</NavLink>
            </div>
          </div>
        </>
      ) : (
        <RiMenu3Fill onClick={toggleMenu} className="text-3xl text-black sm:hidden cursor-pointer z-40" />
      )}
    </div>
  );
}

export default Header;
