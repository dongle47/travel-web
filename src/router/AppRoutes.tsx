import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import DetailPlace from "../pages/DetailPlace/DetailPlace";
import Profile from "../pages/Profile/Profile";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<DetailPlace />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
