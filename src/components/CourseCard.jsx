import React from 'react';
import { server } from '../main';
import { CourseData } from '../context/CourseContext';
import { UserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'; // Ensure axios is imported

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
    <div className="bg-white  rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-contain rounded-md" src={`${server}/${course.image}`} alt={course.title} />
      <div className="py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{course.title}</h3>
        <p className="text-gray-700">Instructor: {course.createdBy}</p>
        <p className="text-gray-700">Duration: {course.duration} weeks</p>
        <p className="text-gray-900 font-semibold">Price: ₹{course.price}</p>

        {isAuth ? (
          <>
            {user && user.role !== 'admin' ? (
              user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Buy Now
                </button>
              )
            ) : (
              <button
                onClick={() => navigate(`/course/study/${course._id}`)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Study
              </button>
            )}
          </>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy Now
          </button>
        )}

        {user && user.role === "admin" && (
          <button
            onClick={() => deleteHandler(course._id)} // Call deleteHandler with course ID
            className="mt-4 w-full bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseCard;


