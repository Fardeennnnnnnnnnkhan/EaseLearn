import React, { useState } from 'react';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

function Verify() {
  const [otp, setOtp] = useState('');
  const { btnloading, verifyOtp } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
    navigate('/login');
    console.log(otp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-pink-200">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 bg-blue-100 flex items-center justify-center p-4 md:p-0">
          <img
            src="https://i.ibb.co/fXHgktz/toshjmosh-a-stunning-3-D-cartoon-illustration-of-a-male-student-1d5b097c-cf94-409e-a42c-6d171d839dc8.png"
            alt="Illustration"
            className="h-48 md:h-80"
          />
        </div>
        
        {/* Left Column (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-pink-600 mb-6">OTP Verification</h2>
          <p className="text-lg mb-4">Please enter the OTP sent to your email</p>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="otp">OTP</label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                name="otp"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
                required
              />
            </div>
            <button
              disabled={btnloading}
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              {btnloading ? 'Please Wait' : 'Verify'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-500">
            Go Back To{' '}
            <Link className="text-pink-600 hover:underline" to="/login">
              Login
            </Link>{' '}
            Page
          </p>
        </div>
      </div>
    </div>
  );
}

export default Verify;
