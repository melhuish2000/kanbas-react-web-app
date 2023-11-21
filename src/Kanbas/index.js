import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import axios from "axios";

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
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
