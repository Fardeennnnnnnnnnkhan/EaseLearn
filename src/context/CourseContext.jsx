import axios from "axios";
import { createContext, useContext, useState ,  useEffect } from "react";
import { server } from "../main";
const CourseContext = createContext()

export const CourseContextProvider = ({children})=>{

    const [courses , setCourses] = useState([])
    const [course , setCourse] = useState("")
    const [mycourse , setMyCourse] = useState([])
async function fetchCourses(){
    try{
        const {data} = await axios.get(`${server}/course/all`)
            setCourses(data.courses)

    } catch(err){
        console.log(err)
    }
}

async function fetchCourse(id){
    try{
        const {data} = await axios.get(`${server}/course/${id}`)
            setCourse(data.course)
        
    }catch(err){
        console.log(err)
    }
}

async function fetchMyCourse(){
    try{
            const {data} = await axios.post(`${server}/admin/mycourse` , {
                headers : {
                    token : localStorage.getItem("token")
                }
            })
            setMyCourse(data.courses)
    }catch(err){
        console.log(err)
    }

}

useEffect(() => {
  fetchCourses()
}, [])


    return <CourseContext.Provider value={{courses , fetchCourses , fetchCourse , course , fetchMyCourse , mycourse}} >{children}</CourseContext.Provider>
}

export const CourseData = ()=>useContext(CourseContext)