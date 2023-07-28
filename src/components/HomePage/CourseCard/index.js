import React from "react";
import Btn from "../CategoriesSolo/Btn";
import group1 from "../../../assets/img/categories.jpg";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const nav = useNavigate();
  return (
    <div className="item">
      <div className="item__top">
        <img src={group1} alt="" />
        <span>
          Групповое занятие: по английскому, уровень A2, урок 1 из 50{" "}
        </span>
        <p>чт, 12:00 – 14:55</p>
      </div>
      <div className="item__bottom">
        <span className="price">1000 Руб</span>
        <span className="notprice">1500 Руб</span>
        <span className="mentor">Jordani</span>
      </div>
      <Btn />
    </div>
  );
};

export default CourseCard;
