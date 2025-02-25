import React, { useState } from 'react';
import { CourseData } from '../context/CourseContext.jsx';
import CourseCard from '../components/CourseCard.jsx';


function Courses() {
    const { courses } = CourseData();
    const [visibleCourses, setVisibleCourses] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleShowMore = () => {
        setVisibleCourses((prev) => prev + 4);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setVisibleCourses(4);
    };

    const filteredCourses = selectedCategory === 'All' 
        ? courses 
        : courses.filter(course => course.category === selectedCategory);

    return (
        <div className="min-h-screen  py-28 transition duration-300">
        <div className="container mx-auto px-5">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-blue-700 mb-2 transition duration-300 hover:underline">
              Explore Our Courses
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-lg mx-auto">
              Discover a variety of courses designed to help you achieve your learning goals.
            </p>
          </div>
      
          {/* Filter Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['All', 'Web Development', 'Data Science', 'App Development', 'Artificial Intelligence'].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-lg border border-blue-600 transition duration-300 
                      ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white text-blue-600 hover:bg-blue-100 hover:scale-105'
                      }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
      
          {/* Course Cards Section */}
          <h1 className="text-3xl font-bold text-center text-black mb-8">Available Courses</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredCourses && filteredCourses.length > 0 ? (
              filteredCourses.slice(0, visibleCourses).map((course) => (
                <div
                  key={course._id}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  <CourseCard course={course} />
                </div>
              ))
            ) : (
              <p className="text-center text-black">No Courses Available Now.</p>
            )}
          </div>
      
          {/* Show More Button */}
          {visibleCourses < filteredCourses.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
      
    );
}

export default Courses;
