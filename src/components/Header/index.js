import React from "react";
import "./index.scss";
import vk from "../../assets/img/VK.png";
import fb from "../../assets/img/Facebook.png";
import insta from "../../assets/img/Instagram.png";
import yt from "../../assets/img/youtube.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__top">
            <div className="logo">Online Academy</div>
            <div className="contact">
              <NavLink to={"https://vk.com/"}>
                <img src={vk} alt="ВКонтакте" />
              </NavLink>
              <NavLink to={"https://ru-ru.facebook.com/"}>
                <img src={fb} alt="Facebook" />
              </NavLink>
              <NavLink to={"https://www.instagram.com/"}>
                <img src={insta} alt="Instagram" />
              </NavLink>
              <NavLink to={"https://www.youtube.com/"}>
                <img src={yt} alt="Youtube" />
              </NavLink>
            </div>
          </div>
          <div className="header__bottom">
            <span className="header__text">УЧИТЬСЯ ЛЕГКО</span>
            <nav className="header__nav">
              <NavLink to={"/"}>Главная</NavLink>
              <NavLink to={"/categoriesSolo"}>Индивидуальные уроки</NavLink>
              <NavLink to={"/categoriesGroup"}>Групповые уроки</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
