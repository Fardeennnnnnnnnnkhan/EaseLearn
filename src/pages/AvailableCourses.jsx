import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '../main'; 
import toast from 'react-hot-toast';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';
function AvailableCourses() {
  const [courses, setCourses] = useState([]);

  // Function to fetch all courses from the server
  const fetchCourses = async () => {
    try {
      const { data } = await axios.get(`${server}/course/all`); // Adjust the route as needed
      const allCourses = data.courses;

      // Select three random courses
      const randomCourses = getRandomCourses(allCourses, 3);
      setCourses(randomCourses);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
      toast.error('Failed to load courses');
    }
  };

  // Utility function to randomly select 'n' courses
  const getRandomCourses = (allCourses, count) => {
    if (allCourses.length <= count) return allCourses; // Return all if less than or equal to 3 courses

    const shuffled = allCourses.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Get the first 'count' items
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-6">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl font-bold mb-8 text-[#4660EC] tracking-wide"
    >
      Top Courses
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {courses.length > 0 ? (
        courses.map((course) => <CourseCard key={course._id} course={course} />)
      ) : (
        <p className="text-lg text-gray-500">No courses available at the moment.</p>
      )}
    </div>
  </div>
  
  
  );
}

export default AvailableCourses;
