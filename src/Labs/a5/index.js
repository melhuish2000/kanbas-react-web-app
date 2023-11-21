// Import necessary libraries
import React from "react";
import WorkingWithArrays from "./WorkingWithArrays";
import EncodeParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/";
  return (
    <div>
      <h1>Assignment 5</h1>
      <WorkingWithObjects />
      <EncodeParametersInURLs />
      <WorkingWithArrays />
      <div className="list-group">
        <a href= {API_BASE + "a5/welcome"} className="list-group-item">
          Welcome
        </a>
      </div>
    </div>
  );
}

export default Assignment5;
