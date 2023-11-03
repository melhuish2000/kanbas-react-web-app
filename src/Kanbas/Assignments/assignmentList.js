import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";

function AssignmentList() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateAssignment(assignment))}>
          Update
        </button>
        <input
          value={assignment.title}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, name: e.target.value }))
          }/>
        <textarea
          value={assignment.description}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, description: e.target.value }))
          }/>
      </li>
      {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(selectAssignment(assignment))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteAssignment(assignment._id))}>
              Delete
            </button>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default AssignmentList;