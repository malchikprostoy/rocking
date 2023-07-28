import React from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "./Jumbotron/index";
import Why from "./Why/index";
import CategoriesSolo from "./CategoriesSolo/index";
import CategoriesGroup from "./CategoriesGroup";
import Header from "../Header";
import Footer from "../Footer";
import Comments from "./Comments";

function HomePage() {
  const nav = useNavigate();
  const hideHeaderFooterRoutes = ["/studlogin", "/replogin"];

  const currentPath = window.location.pathname;
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(currentPath);

  return (
    <div id="homePage">
      {!shouldHideHeaderFooter && <Header />}
      <div className="container">
        <div className="homePage">
          <Jumbotron />
          <Why />
          <CategoriesSolo />
          <CategoriesGroup />
          <Comments/>
        </div>
      </div>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default HomePage;
