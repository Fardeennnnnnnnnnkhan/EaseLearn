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
      when: "beforeChildren",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function Home() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section with Animated Background */}
      <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col md:flex-row justify-center items-center">
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
            <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
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
                <motion.span
                  key={i}
                  className="inline-block mr-2 tracking-wider leading-20"
                  variants={textVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* CTA Button */}
            <motion.div className="group inline-block mt-8" whileHover="hover">
            <motion.button
  onClick={() => navigate("/courses")}
  className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-bold text-xl text-white md:text-base border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out"
  variants={buttonVariants}
>
  <span className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-700 ease-in group-hover:scale-x-100 bg-blue-300 opacity-20"></span>
  <Link to="/courses" className="relative z-10 group-hover:text-yellow-300">
    Get Started
  </Link>
</motion.button>
            </motion.div>
          </motion.div>
        </div>
        
      </div>
       <div className="pt-10">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection("features")}
            className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg"
          >
            Scroll to Features
          </button>
        </motion.div> */}
      </div>

      {/* Smooth Scroll Section */}
     

    

      {/* Testimonial Section */}
<AvailableCourses />
    <Testimonial/>
{/* <Features/> */}
<Instructors/>
<FAQ/>
      {/* Footer */}
      {/* <div className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 EaseLearn. All rights reserved.</p>
        </div>
      </div> */}
    </>
  );
}

export default Home;