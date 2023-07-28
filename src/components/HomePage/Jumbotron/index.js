import React from "react";
import "./index.scss";
import jumb from "../../../assets/img/jumbotron.png";
import { Link, useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const nav = useNavigate();
  return (
    <div className="jumbotron">
      <div className="left" data-aos="fade-up">
        <div className="text">
          <h1>
            Онлайн <span id="h1">репетитор</span> к вашим услугам
          </h1>
          <span>
            Зарегистрируйтесь прямо сейчас и начните обучаться уже сегодня{" "}
          </span>
        </div>
        <div className="button">
          <button onClick={() => nav("/studLogin")}>Войти как ученик</button>
          <Link to={"/repLogin"}>
            <button className="btn">Войти как специалист</button>
          </Link>
        </div>
        <div className="scores">
          <div className="score">
            <span className="score__num">10+</span>
            <span className="score__text">Лет опыта на рынке</span>
          </div>
          <div className="score">
            <span className="score__num">1000+</span>
            <span className="score__text">Специалистов готовые вам помочь</span>
          </div>
          <div className="score">
            <span className="score__num">10000+</span>
            <span className="score__text">
              Выпускников окончив ОРТ и другие предметы на отлично
            </span>
          </div>
        </div>
      </div>
      <div className="right" data-aos="fade-down">
        <img src={jumb} alt="Kids" />
      </div>
    </div>
  );
};

export default Jumbotron;
