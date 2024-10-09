import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaUsers, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className='h-full w-[15vw] bg-blue-400  py-24 flex flex-col items-center'>
      <ul className='w-full'>
        {/* Home */}
        <li className='flex items-center justify-center md:justify-start border-b-[1px] border-white py-4 hover:bg-gray-100'>
          <Link to="/admin/dashboard" className='flex items-center px-4'>
            <div className='bg-white p-2 rounded-full'>
              <FaHome className="text-black text-xl" />
            </div>
            <span className='hidden md:inline-block ml-4 text-black'>Home</span>
          </Link>
        </li>

        {/* Courses */}
        <li className='flex items-center justify-center md:justify-start py-4 border-b-[1px] border-white hover:bg-gray-100'>
          <Link to="/admin/course" className='flex items-center px-4'>
            <div className='bg-white p-2 rounded-full'>
              <FaBook className="text-black text-xl" />
            </div>
            <span className='hidden md:inline-block ml-4 text-black'>Courses</span>
          </Link>
        </li>

        {/* Users */}
        <li className='flex items-center justify-center md:justify-start py-4 border-b-[1px] border-white hover:bg-gray-100'>
          <Link to="/admin/users" className='flex items-center px-4'>
            <div className='bg-white p-2 rounded-full'>
              <FaUsers className="text-black text-xl" />
            </div>
            <span className='hidden md:inline-block ml-4 text-black'>Users</span>
          </Link>
        </li>

        {/* Logout */}
        <li className='flex items-center justify-center md:justify-start py-4 border-b-[1px] border-white hover:bg-gray-100'>
          <Link to="/Account" className='flex items-center px-4'>
            <div className='bg-white p-2 rounded-full'>
              <FaSignOutAlt className="text-black text-xl" />
            </div>
            <span className='hidden md:inline-block ml-4 text-black'>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
