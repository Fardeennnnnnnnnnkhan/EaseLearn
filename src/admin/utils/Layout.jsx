import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="content flex-grow p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
}

export default Layout;
