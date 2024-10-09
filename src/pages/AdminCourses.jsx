import React, { useState } from "react";
import Layout from "../admin/utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";
import toast from "react-hot-toast";
import { server } from "../main";
import axios from 'axios'
function AdminCourses({ user }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  
  if (user && user.role !== "admin") return navigate("/");

  const { courses, fetchCourses } = CourseData();
  
  const Categories = [
    "Web Development",
    "App Development",
    "Game Development",
    "Data Science",
    "Artificial Intelligence",
  ];
  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
      setImage(file);
    } else {
      toast.error("Please upload a valid image file.");
    }
  };
  const submitHandler = async (e)=>{
      
              e.preventDefault()
              setBtnLoading(true)
      
              const myForm = new FormData()
      
              myForm.append("title",title)
              myForm.append("description",description)
              myForm.append("createdBy" ,createdBy)
              myForm.append("category",category)
              myForm.append("duration",duration)
              myForm.append("price",price)
              myForm.append("file",image)
    try{
        const {data} = await  axios.post(`${server}/admin/course/new` , myForm , {
            headers : {
                token : localStorage.getItem("token")
            }
        })
        toast.success(data.message)
        setBtnLoading(false)
       await  fetchCourses()
       setImage("")
       setTitle("")
       setDescription("")
       setCategory("")
      setDuration("")
      setCreatedBy("")
       setPrice("")
       setImagePreview("")
    }catch(err){
        toast.error(err.response.data.message)
    }
  }

  return (
    <Layout>
      <div className="AdminCourses flex w-full  py-20">
       
        <div className="right w-3/4 flex flex-col items-center justify-center bg-white max-h-screen ">
          <div className="w-full max-w-lg ">
            <h2 className="text-2xl font-bold mb-1 text-center">Add Course</h2>
            <form onSubmit={submitHandler} className="space-y-2" >
              
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />

              <label htmlFor="description" className="block text-sm font-medium">
                Description
              </label>
              <input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />

              <label htmlFor="price" className="block text-sm font-medium">
                Price
              </label>
              <input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />

              <label htmlFor="duration" className="block text-sm font-medium">
                Duration
              </label>
              <input
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />

              <label htmlFor="createdBy" className="block text-sm font-medium">
                Created By
              </label>
              <input
                id="createdBy"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />

              <label htmlFor="category" className="block text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select Category</option>
                {Categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <label htmlFor="image" className="block text-sm font-medium">
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                className="w-full p-2 border rounded-lg"
                onChange={imageHandler}
                required
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-20 mt-4 rounded-lg" />
              )}

              <button
                disabled={btnLoading}
                className={`w-full p-2 mt-4 text-white rounded-lg bg-blue-600 ${btnLoading ? "cursor-not-allowed opacity-50" : ""}`}
                type="submit"
              >
                {btnLoading ? "Please Wait" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminCourses;
