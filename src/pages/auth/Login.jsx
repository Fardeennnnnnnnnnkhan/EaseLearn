import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { UserData } from '../../context/UserContext';
import { CourseData } from '../../context/CourseContext';

function Login() {
  const navigate = useNavigate();
  const { btnloading, loginUser } = UserData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-pink-200">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Right Column (Image) - Moves to top on small screens */}
        <div className="w-full md:w-1/2 bg-blue-100 flex items-center justify-center p-4 md:p-0">
          <img
            src="https://i.ibb.co/5xpGtrn/toshjmosh-a-stunning-3-D-cartoon-illustration-of-a-female-studen-abef92d7-21c2-4bd7-a9fa-847dae478fc.png"
            alt="Illustration"
            className="h-48 md:h-80"
          />
        </div>
        
        {/* Left Column (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Login</h2>
          <p className="text-lg mb-4">Welcome back !!!</p>
          <form onSubmit={submitHandler}>
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
              {btnloading ? 'Please Wait' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-500">
            Don't have an account yet?{' '}
            <Link className="text-pink-600 hover:underline" to="/register">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
