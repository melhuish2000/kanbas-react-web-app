import KanbasNavigation from "./KanbasNavigation";
import Signin from "./users/signin";
import Signup from "./users/signup";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import axios from "axios";
import Account from "./users/account";
import UserTable from "./users/table";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";


  


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="/account" element={<Account />} />
          <Route path="/users/table" element={<UserTable />} />


        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
