import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../context/CourseContext'
import { server } from '../main'
import { Link } from 'react-router-dom'

function Study({user}) {
    const params = useParams()
    const navigate = useNavigate()
    const {fetchCourse , course} = CourseData()
// Add This Feature When Payment Feature is Added
    // if(user && user.role !== "admin" && !user.subscription.includes(params.id)) 
    //     return navigate('/')
    useEffect(() => {
     fetchCourse(params.id)
    }, [])
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
    {course && (
      <div className="max-w-md w-full bg-gray-100  shadow-lg rounded-lg p-6">
        <img className="w-40 mx-auto rounded-t-lg  mb-4" src={`${server}/${course.image}`} alt={course.title} />
        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
        <h4 className="text-gray-700 mb-4">{course.description}</h4>
        <h5 className="text-gray-600 mb-2">Created by: {course.createdBy}</h5>
        <h5 className="text-gray-600 mb-6">Duration: {course.duration}</h5>
 {/* Rating Section */}


        <Link to={`/lectures/${course._id}`}>
          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Go to Classroom
          </button>
        </Link>
      </div>
    )}
  </div>
  )
}

export default Study
