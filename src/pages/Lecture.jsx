import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../main";
import axios from "axios";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

function Lecture({ user }) {
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [video, setVideo] = useState("")
  const [videoPreview, setVideoPreview] = useState("")
  const [btnLoading , setBtnLoading] = useState("")
const navigate = useNavigate()
  const params = useParams();

  async function fetchLectures() {
    try {
      const { data } = await axios.get(
        `${server}/course/lectures/${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setLectures(data.lectures);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/course/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchLectures();
  }, []);

 const  submitHandler = async (e)=>{
  setBtnLoading(true)
  e.preventDefault()

  const myForm = new FormData()
  myForm.append("title" , title)
  myForm.append("description" , description)
  myForm.append("file" , video)

  try{
      const {data} = await axios.post(`${server}/admin/course/${params.id}` , myForm  ,{
        headers : {
          token : localStorage.getItem("token")
        }
      })
      toast.success(data.message)
      setBtnLoading(false)
      setShow(false)
      fetchLectures()
        setTitle("")
        setDescription("")

  }
catch(err){
  toast.error(err.response.data.message)
  setBtnLoading(false)

}
 }

const deleteHandler = async  (id)=>{
  if(confirm("Are You Sure , You Want To Delete This Lecture")){
    try{
      const {data} = axios.delete(`${server}/admin/lecture/${id}` , {
        headers  : {
          token : localStorage.getItem("token")
        }
      })
      toast.success(data.message)
      fetchLectures()

    }catch(err){
      toast.error(err.response.data.message)
    }
  }

}

 const changeVideoHandler = (e) => {
  const file = e.target.files[0];
  
  // Create a blob URL for the video preview
  const videoURL = URL.createObjectURL(file);

  setVideoPreview(videoURL);
  setVideo(file);
};

  return (
    <div className="bg-white min-h-screen  py-28">
      {loading ? (
        <Loading />
      ) : (
        <div className="lecture-page flex flex-col md:flex-row gap-4 p-4">
          <div className="left md:w-2/3 w-full p-4 bg-white shadow-md rounded-lg">
            {lecLoading ? (
              <Loading />
            ) : lecture.video ? (
              <div className="w-full">
                <video
                  width={"100%"}
                  controls
                  controlsList="nodownload noremoteplayback"
                  disabledPictureInPicture
                  disableRemotePlayback
                  autoPlay
                  src={`${server}/${lecture.video}`}
                  className="rounded-md shadow-lg"
                ></video>
                <h1 className="text-2xl font-bold mt-4">{lecture.title}</h1>
                <p className="text-gray-900 mt-2">{lecture.description}</p>
              </div>
            ) : (
              <h1>Please Select a Lecture</h1>
            )}
          </div>

          <div className="right md:w-1/3 w-full p-4 bg-gray-50 shadow-md rounded-lg">
            {user && user.role === "admin" && (
              <button
                onClick={() => setShow(!show)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 transition-all"
              >
                Add Lecture
              </button>
            )}
            {show && (
              <div className="lecture-form p-4 bg-white rounded shadow-md">
                <button onClick={()=> setShow(!show)} className="text-lg font-semibold mb-4">{  show ? "Close":"Add Lecture"}</button>
                <form onSubmit={submitHandler} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                      type="text"
                      className="text-black mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Description</label>
                    <input
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                      type="text"
                      className= "text-black mt-1 p-2 block  w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Choose Video</label>
                    <input
                    onChange={changeVideoHandler}
                      type="file"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />

                    {
                      videoPreview && <video src={videoPreview}  width={300} controls />
                    }
                  </div>
                  <button
                  disabled ={btnLoading}
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all"
                  >
                    { btnLoading ? "Please Wait..." : "Add" }
                  </button>
                </form>
              </div>
            )}

            <div className="mt-6">
              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  <React.Fragment key={i}>
                    <div
                      onClick={() => fetchLecture(e._id)}
                      className={`lecture-number p-3 my-2 cursor-pointer rounded-md ${
                        lecture._id === e._id
                          ? "bg-blue-100 border-l-4 border-blue-600"
                          : "bg-white hover:bg-gray-200"
                      } transition-all shadow`}
                    >
                      {i + 1}. {e.title}
                    </div>
                    {user && user.role === "admin" && (
                      <button onClick={()=> deleteHandler(e._id)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mt-2 transition-all">
                        Delete {e.title}
                      </button>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p className="text-gray-500">No lectures yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lecture;
