import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import DetailPlace from "../pages/DetailPlace/DetailPlace";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Authentication/Login";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<DetailPlace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
