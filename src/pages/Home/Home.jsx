import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Testimonial from '../../components/Testimonials/Testimonial';
import AvailableCourses from '../AvailableCourses.jsx';
import Features from '../Features.jsx';
import Instructors from '../Instructors.jsx';
import FAQ from '../FAQ.jsx';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen text-black bg-white flex flex-col md:flex-row justify-center items-center">
        {/* Right Section - Image */}
        <div className="order-1 md:order-2 w-full md:w-[45vw] flex justify-center items-center p-6">
          <motion.div
            className="img w-3/4 md:w-full"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.ibb.co/PDDtY12/Illustration.png"
              alt="Illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Left Section - Text */}
        <div className="order-2 md:order-1 w-full mt-4 md:w-[55vw] flex justify-center items-center p-6 md:p-20">
          <motion.div
            className="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1 className="text-4xl md:text-6xl tracking-tighter leading-none">
              {["The", "Knowledge", "Base", "That", "Democratizes", "Knowledge"].map(
                (word, i) => (
                  <motion.span key={i} className="inline-block mr-2" variants={textVariants}>
                    {word}
                  </motion.span>
                )
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p className="text-lg md:text-2xl mt-4">
              {["Earn,", "Grow,", "Excel", "With", "EaseLearn"].map((word, i) => (
                <motion.span key={i} className="inline-block mr-2 tracking-wider leading-20" variants={textVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* Button */}
            <motion.div className="group inline-block mt-8" whileHover="hover">
              <motion.button
                onClick={() => navigate('/courses')}
                className="relative overflow-hidden border px-4 py-2 md:px-6 md:py-3 rounded-full bg-green-600 text-white text-sm md:text-base"
                variants={buttonVariants}
              >
                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-700 ease-in group-hover:scale-x-100"></span>
                <Link to="/courses" className="relative z-10 group-hover:text-black">
                  Get Started
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AvailableCourses />
      <Features />
      <Testimonial />
      <Instructors />
      <FAQ />
    </>
  );
}

export default Home;
