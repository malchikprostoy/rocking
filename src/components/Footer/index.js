import React from "react";
import "./index.scss";
import vk from "../../assets/img/VK.png";
import fb from "../../assets/img/Facebook.png";
import insta from "../../assets/img/Instagram.png";
import yt from "../../assets/img/youtube.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__top">
        <div className="first">
          <form action="#">
            <label for="email">Подпишитесь на свежие материалы</label>
            <input type="email" name="email" className="email" placeholder="Email" required/>
            <input type="submit" value="Подписаться" className="button" />
            <p>
              Нажимая «Подписаться», вы соглашаетесь с политикой
              конфиденциальности
            </p>
          </form>
        </div>
        <div className="second">
          <span>Напишите нам</span>
          <p>
            Если у вас есть предложения об улучшении сайта или интересная идея
            для статьи, напишите нам на info@prosto.education
          </p>
        </div>
        <div className="third">
          <span>Мы в соцсетях</span>
          <div className="contact">
            <a href="#">
              <img src={vk} alt="ВКонтакте" />
            </a>
            <a href="#">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#">
              <img src={yt} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>Пользовательское соглашение</span>
        <p>© 2023 Учиться Легко</p>
      </div>
    </div>
  );
};

export default Footer;
