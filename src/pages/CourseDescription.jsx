import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../context/CourseContext';
import { server } from '../main';
function CourseDescription({user}) {
    const navigate = useNavigate()
    const params = useParams();
    const {fetchCourse ,course , fetchMyCourse} = CourseData()
  const [loading , setLoading ] = useState(false)
    useEffect(()=>{
        fetchCourse(params.id)
    } , [])

  return (
    

    <>
    {course && (
      <div className="min-h-screen  mt-40 bg-white text-black flex flex-col md:flex-row items-center md:items-start py-4 md:p-10">
        {/* Course Image */}
        <div className="w-full  object-cover md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={`${server}/${course.image}`}
            alt=""
            className="w-full md:w-3/4 object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* Course Details */}
        <div className="w-full   md:w-1/2 md:ml-8">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg mb-2">Instructor: {course.createdBy}</p>
          <p className="text-lg mb-2">Duration: {course.duration}</p>
          
          {/* Ratings and Reviews */}
          <div className="mb-4">
            <p className="text-lg mb-2">Ratings and Reviews:</p>
            <div className="flex items-center">
              {/* Display stars for ratings */}
              {[...Array(3)].map((star, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 fill-current ${
                    index < course.rating ? 'text-yellow-400' : 'text-yellow-600'
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.747l-6 5.853 1.413 8.23L12 18.896l-7.413 4.934L6 15.6 0 9.747l8.332-1.592L12 .587z" />
                </svg>
              ))}
              <span className="ml-2">{course.rating}</span>
            </div>
          </div>
  
          {/* Course Long Description */}
          <p className="text-lg mb-4">
            {course.description}
          </p>
  
          {/* Price and Buy/Study Button */}
          <p className="text-2xl font-semibold mb-4">Buy This Course Only At ₹{course.price}</p>
          {user && user.subscription.includes(course._id) ? (
            <button
              onClick={() => navigate('/course/study/:id')}
              className="mt-4 w-full bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Study
            </button>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="mt-4  bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          )}
  
         
        </div>
      </div>
    )}
  </>
  
  )
}

export default CourseDescription
