import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
export const fetchCourses = async () => {
  const response = await axios.get(API_BASE + "/courses");
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(`${API_BASE}/courses/${courseId}`
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    API_BASE + "/courses",
    course
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${API_BASE}/courses/${course._id}`,
    course
  );
  return response.data;
};
