import React from "react";
import CourseCard from "../CourseCard";
const CategoriesSolo = () => {
  const numberOfCourseCards = 15;
  return (
    <div className="categoriesSolo" id="categoriesSolo">
      <h1>Лучшие индивидуальные занятия</h1>
      <div className="items">
        {Array.from({ length: numberOfCourseCards }).map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSolo;
