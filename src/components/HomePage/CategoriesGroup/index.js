import React from "react";
import "./index.scss";
import CourseCard from "../CourseCard";

const CategoriesGroup = () => {
  const numberOfCourseCards = 5;
  return (
    <div className="categoriesGroup" id="categoriesGroup">
      <h1>Лучшие групповые занятия</h1>
      <div className="items">
        {Array.from({ length: numberOfCourseCards }).map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesGroup;
