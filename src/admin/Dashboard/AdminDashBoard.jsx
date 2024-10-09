import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../utils/Layout'
import { useState } from 'react'
import axios from 'axios'
import { server } from '../../main'
function AdminDashBoard({user}) {
  const [stats , setStats] = useState([])
    const  navigate =  useNavigate()
    if(user && user.role !== "admin") return navigate("/")


      const fetchStats = async()=>{
          try{
              const {data} = await axios.get(`${server}/admin/stats` , {
                headers:{
                  token : localStorage.getItem("token")
                }
              })
              setStats(data.stats)
          }catch(err){
            console.log(err)
          }
      }

      useEffect(()=>{
          fetchStats()
      },[])
  return (
   <div>
    <Layout> 
    <div className="min-content flex justify-center items-center py-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
    {/* Total Courses Box */}
    <div className="box p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300">
      <Link  to={'/admin/course '} className="text-gray-500 text-lg">Total Courses</Link>
      <p className="text-4xl font-bold">{stats.totalCourses}</p>
    </div>

    {/* Total Lectures Box */}
    <div className="box p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300">
      <Link to={"/admin/users"} className="text-gray-500 text-lg">Total Lectures</Link>
      <p className="text-4xl font-bold">{stats.totalLectures}</p>
    </div>

    {/* Total Users Box */}
    <div className="box p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300">
      <Link to={"/admin/users"} className="text-gray-500 text-lg">Total Users</Link>
      <p className="text-4xl font-bold">{stats.totalUsers}</p>
    </div>
  </div>
</div>

    </Layout>
   </div>
  )
}

export default AdminDashBoard
