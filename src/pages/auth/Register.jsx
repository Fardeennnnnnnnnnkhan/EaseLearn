import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { UserData } from '../../context/UserContext.jsx';

function Register() {
  const navigate = useNavigate();
  const { btnloading, registerUser } = UserData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-blue-200 to-pink-200">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Right Column (Image) - Moves to top on small screens */}
        <div className="w-full md:w-1/2 bg-green-100 flex items-center justify-center p-4 md:p-0">
          <img
            src="https://i.ibb.co/645tY7V/toshjmosh-a-stunning-3-D-cartoon-illustration-of-a-male-student-25db8c50-fd24-437a-8a50-39195302f967.pngg"
            alt="Illustration"
            className="h-96 md:h-96"
          />
        </div>
        
        {/* Left Column (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Register</h2>
          <p className="text-lg mb-4">Join us today!</p>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
                required
              />
            </div>
            <button
              disabled={btnloading}
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              {btnloading ? 'Please Wait' : 'Register'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-500">
            Already have an account?{' '}
            <Link className="text-pink-600 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
