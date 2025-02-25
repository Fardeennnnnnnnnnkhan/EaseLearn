import React from 'react';
import { server } from '../main';
import { CourseData } from '../context/CourseContext';
import { UserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'; // Ensure axios is imported
import {motion} from 'framer-motion'
function CourseCard({ course }) {
  const navigate = useNavigate();
  const { isAuth, user } = UserData();
  const { fetchCourses } = CourseData();

  // Delete handler for deleting the course
  const deleteHandler = async (id) => {
    const token = localStorage.getItem("token");

    // Check if token exists
    if (!token) {
      toast.error("You are not authorized to perform this action.");
      return;
    }

    if (confirm("Are You Sure You want to delete this Course?")) {
      try {
        const response = await axios.delete(`${server}/admin/course/${id}`, {
          headers: {
            token: token, // Pass the token from localStorage
          },
        });

        if (response && response.data) {
          toast.success(response.data.message); // Show success message
          fetchCourses(); // Refresh the list of courses after successful deletion
        }
      } catch (err) {
        // Handle different error cases
        if (err.response && err.response.data) {
          toast.error(err.response.data.message); // Show error message from server
        } else if (err.request) {
          toast.error("No response from server. Please check your network.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      }
    }
  };

  return (
<motion.div
  whileHover={{ scale: 1.02, translateY: -5 }}
  whileTap={{ scale: 0.98 }}
  className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transform transition-all duration-300 relative"
>
  {/* Top Badge */}
  {course.popular && (
    <div className="absolute top-3 left-3 bg-[#4660EC] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
      Popular
    </div>
  )}

  {/* Course Image */}
  <img
    className="w-full h-48 object-cover rounded-md mb-4"
    src={`${server}/${course.image}`}
    alt={course.title}
  />

  {/* Course Details */}
  <div>
    <h3 className="font-bold text-lg mb-2 text-[#4660EC] tracking-tight truncate">
      {course.title}
    </h3>
    <p className="text-sm text-gray-600 mb-2">
      <span className="font-medium">Instructor:</span> {course.createdBy}
    </p>
    <p className="text-sm text-gray-600 mb-2">
      <span className="font-medium">Duration:</span> {course.duration} weeks
    </p>
    <p className="text-lg font-semibold mb-4 text-gray-800">
      {course.price === 0 ? (
        <span className="text-green-600">Free</span>
      ) : (
        `Price: ₹${course.price}`
      )}
    </p>

    {/* Buttons */}
    {isAuth ? (
      <>
        {user && user.role !== "admin" ? (
          user.subscription.includes(course._id) ? (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="w-full bg-[#4660EC] hover:bg-[#324db0] text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              Study Now
            </button>
          ) : (
            <button
              onClick={() => navigate(`/course/${course._id}`)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              Buy Now
            </button>
          )
        ) : (
          <button
            onClick={() => navigate(`/course/study/${course._id}`)}
            className="w-full bg-[#4660EC] hover:bg-[#324db0] text-white font-medium py-2 px-4 rounded-lg transition-all"
          >
            Study Now
          </button>
        )}
      </>
    ) : (
      <button
        onClick={() => navigate("/login")}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
      >
        Buy Now
      </button>
    )}

    {/* Admin Button */}
    {user && user.role === "admin" && (
      <button
        onClick={() => deleteHandler(course._id)}
        className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
      >
        Delete
      </button>
    )}
  </div>
</motion.div>



  );
}

export default CourseCard;


