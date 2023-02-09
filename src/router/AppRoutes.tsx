import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../modules/Home/Home";
import Main from "../modules/Main/Main";
import DetailPlace from "../modules/DetailPlace/DetailPlace";
import DetailPlace1 from "../modules/DetailPlace/DetailPlace1";
import Profile from "../modules/Profile/Profile";
import Login from "../modules/Authentication/Login";
import Register from "../modules/Authentication/Register";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail-place1" element={<DetailPlace1 />} />
        <Route path="/detail-place/:id" element={<DetailPlace />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
