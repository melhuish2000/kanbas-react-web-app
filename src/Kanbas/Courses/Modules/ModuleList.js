import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  addModule, 
  deleteModule, 
  updateModule, 
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule} from "./client";
function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

 const module = useSelector((state) => state.modulesReducer.module);
 const modules = useSelector((state) => state.modulesReducer.modules);


  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={handleAddModule(module)}>Add</button>
        <button onClick={handleUpdateModule(module)}>
                Update
        </button>
        ...
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => setModule(module)}>
              Edit
            </button>
            <button
              onClick={() => handleDeleteModule(module)}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>))}
    </ul>
  );
}
export default ModuleList;
