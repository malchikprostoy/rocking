import React from "react";
import CourseCard from "../../../components/HomePage/CourseCard/index"
import './index.scss'

const CSolo = () => {
  const numberOfCourseCards = 4;
  return (
    <div className="categoriesSolo" id="categoriesSolo">
      <h1>Индивидуальные занятия</h1>
      <div className="items">
        {Array.from({ length: numberOfCourseCards }).map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CSolo;
