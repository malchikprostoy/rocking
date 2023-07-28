import React from "react";
import CourseCard from "../../../components/HomePage/CourseCard/index";
import "./index.scss";

const CGroup = () => {
  const numberOfCourseCards = 4;
  return (
    <div className="categoriesGroup" id="categoriesGroup">
      <h1>Групповые занятия</h1>
      <div className="items">
        {Array.from({ length: numberOfCourseCards }).map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CGroup;
