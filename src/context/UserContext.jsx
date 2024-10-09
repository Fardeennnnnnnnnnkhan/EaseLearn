import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [user , setUser]  = useState([])
  const [isAuth , setIsAuth]  = useState(false)
  const [btnloading  , setBtnLoading] = useState(false)
  const [loading  , setLoading] = useState(true)

  async function loginUser(email, password, navigate ,fetchMyCourse) {
    setBtnLoading(true)
    try {
      const { data } = await axios.post(`${server}/api/user/login `, {
        email,
        password,
      });

      toast.success(data.message);
      localStorage.setItem("token" , data.token)
      setUser(data.user)
      setIsAuth(true)
      setBtnLoading(false)
      navigate("/")
      fetchMyCourse()
    } catch (err) {
        setIsAuth(false)
        setBtnLoading(false)
        toast.error(err.response.data.message)
    }
  }

  async function registerUser(name ,email, password, navigate) {
    try {
      setBtnLoading(true)
      const { data } = await axios.post(`${server}/api/user/register `, {
        name,
        email,
        password,
      });

      toast.success(data.message);
      localStorage.setItem("activationToken" , data.activationToken)
     
      setBtnLoading(false)
      navigate("/verify")
    } catch (err) {
        setBtnLoading(false)
        toast.error(err.response.data.message)
    }
  }

  async function verifyOtp (otp, navigate) {
    setBtnLoading(true);
    try {
      const activationToken = localStorage.getItem("activationToken");
      const { data } = await axios.post(`${server}/api/user/verify`, {
        otp,
        activationToken,
      });
      toast.success(data.message);
      navigate('/login');
      localStorage.clear();  // Clear the token once user is registered
      setBtnLoading(false);
    } catch (err) {
      setBtnLoading(false);
      toast.error(err.response.data.message);
    }
  }
  


  async function fetchUser(){
    try{
        const {data} =await axios.get(`${server}/api/user/me` , {
            headers: {
                token : localStorage.getItem("token")
            }
        })
        
        setIsAuth(true)
        setUser(data.user)
        setLoading(false)
    }catch(err){
        console.log(err)
        setLoading(false)

    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  
  return (
    <UserContext.Provider value={{ user , setUser , setIsAuth , isAuth , loginUser , btnloading , loading , registerUser , verifyOtp }}>
      {children}
      <Toaster/>
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
