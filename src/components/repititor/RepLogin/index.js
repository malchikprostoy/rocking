import axios from "axios";
import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const RepLogin = () => {
  const [glaza, setGlaza] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Заполните все обязательные поля.");
        return;
      }
      const requestData = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:8080/api/users/register-mentor",
        requestData
      );
      console.log(response.data);
    } catch (error) {
      console.error("err", error);
    }
  };
  return (
    <div id="login">
      <div className="container">
        <div className="login">
          <div className="login__block">
            <h1>Вход для специалиста</h1>
            <div className="login__block-input">
              <label htmlFor="al">Почта</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="icon" />
            </div>
            {glaza ? (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="text" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEye
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            )}
            <div className="login__block-btn">
              <p style={{ width: "300px" }}>
                У вас нет учетной записи?{" "}
                <Link to={"/repRegistr"}>
                  <span>Создайте учетную запись!</span>
                </Link>
              </p>
              <Link style={{ width: "180px" }} to={"/forgatPassRep"}>
                <h4>Забыли пароль?</h4>
              </Link>
            </div>
            <div className="login__block-button">
              <button onClick={handleLogin}>Войти</button>
              <Link to={"/studLogin"}>
                <button className="btn">Я не специалист!</button>
              </Link>
            </div>
            <span>или</span>
            <div className="login__block-icon">
              <FcGoogle size={"30px"} />
              <BsTwitter size={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepLogin;
