import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage";
import StudLogin from "./components/student/StudLogin";
import RepLogin from "./components/repititor/RepLogin";
import StudRegistr from "./components/student/StudRegistr";
import RepRegistr from "./components/repititor/RepRegistr";
import ForgatPassRep from "./components/repititor/ForgatPassRep";
import ForgatPassStud from "./components/student/ForgatPassStud";
import RepProfile from "./components/repititor/RepProfile";
import CategoriGroPage from "./pages/CategoriGroPage";
import CategoriSoloPage from "./pages/CategoriSoloPage";
import MorePage from "./pages/components/morePage";
import AOS from "aos";
import "aos/dist/aos.css";
import StudProfile from "./components/student/StudProfile";
import UserMain from "./pages/UserMain";
import UserCSolo from "./pages/UserCSolo";
import UserCGroup from "./pages/UserCGroup";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studlogin" element={<StudLogin />} />
          <Route path="/replogin" element={<RepLogin />} />
          <Route path="/studRegistr" element={<StudRegistr />} />
          <Route path="/repRegistr" element={<RepRegistr />} />
          <Route path="/forgatPassRep" element={<ForgatPassRep />} />
          <Route path="/forgatPassStud" element={<ForgatPassStud />} />
          <Route path="/repProfile" element={<RepProfile />} />
          <Route path="/studProfile" element={<StudProfile />} />
          <Route path="/categoriesSolo" element={<CategoriSoloPage />} />
          <Route path="/categoriesGroup" element={<CategoriGroPage />} />
          <Route path="/morePage" element={<MorePage />} />
          <Route path="/userMain" element={<UserMain/>}/>
          <Route path="/userCSolo" element={<UserCSolo/>}/>
          <Route path="/userCGroup" element={<UserCGroup/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
