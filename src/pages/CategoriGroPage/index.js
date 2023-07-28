import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import grogro from "../../assets/img/grogro.png";
import "./index.scss";
import CourseCard from "../../components/HomePage/CourseCard";
const CategoriGroPage = () => {
  const numberOfCourseCards = 5;
  return (
    <div id="categoriGroPage">
      <Header />
      <div className="container">
        <div className="categoriGroPage">
          <div className="categoriGroPage__block">
            <div class="categoriGroPage__block-text" data-aos="fade-down-right">
              <h1>
                Лучшие онлайн <span>групповые</span> занятия для тебя
              </h1>
              <li>
                Найди себе группу для обучение <br /> прямо здесь!
              </li>
            </div>
            <div class="categoriGroPage__block-img" data-aos="flip-left">
              <img src={grogro} alt="" />
            </div>
          </div>
          <div className="items">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
          <div className="items">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
          <div className="items">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriGroPage;
