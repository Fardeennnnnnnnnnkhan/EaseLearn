import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Footer from './components/Footer/Footer';
import About from './pages/about/About';
import Account from './pages/account/Account';
import { UserData } from './context/UserContext.jsx';
import Loading from './components/Loading.jsx';
import Courses from './pages/Courses.jsx';
import CourseDescription from './pages/CourseDescription.jsx';
import Study from './pages/Study.jsx';
import Lecture from './pages/Lecture.jsx';
import AdminDashBoard from './admin/Dashboard/AdminDashBoard.jsx';
import AdminCourses from './pages/AdminCourses.jsx';
import AdminUser from './admin/users/AdminUser.jsx';

function AppRoutes() {
  const { isAuth, user, loading } = UserData();
  const location = useLocation(); // Get the current location

  // Define the paths where the Header and Footer should not be displayed
  const noHeaderFooterPaths = ['/login', '/register', '/verify'];

  // Check if the current path is in the array
  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header isAuth={isAuth} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={isAuth ? <Account user={user} /> : <Login />} />
        <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        <Route path="/register" element={isAuth ? <Home /> : <Register />} />
        <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={isAuth ? <CourseDescription user={user} /> : <Login />} />
        <Route path="/course/study/:id" element={isAuth ? <Study user={user} /> : <Login />} />
        <Route path="/lectures/:id" element={isAuth ? <Lecture user={user} /> : <Login />} />
        <Route path="/admin/dashboard" element={isAuth ? <AdminDashBoard user={user} /> : <Login />} />
        <Route path="/admin/course" element={isAuth ? <AdminCourses user={user} /> : <Login />} />
        <Route path="/admin/users" element={isAuth ? <AdminUser user={user} /> : <Login />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  const { loading } = UserData();

  return (
    <>
      {loading ? <Loading /> : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
