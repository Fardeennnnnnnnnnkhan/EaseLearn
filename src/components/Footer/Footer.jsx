import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h2 className="text-xl font-bold mb-4">EaseLearn</h2>
            <p className="text-sm text-gray-400">
              EaseLearn is your go-to platform for quality learning. Whether you want to upskill or explore new knowledge areas, we've got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/courses" className="hover:text-green-500">Courses</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-green-500">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:text-green-500">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-500">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-2">
              Email: support@easelearn.com
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Phone: +123 456 7890
            </p>
            <p className="text-sm text-gray-400">
              Address: 123 Learning St, Knowledge City, EduLand
            </p>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} EaseLearn. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed and developed by Fardeen Khan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
