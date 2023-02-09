import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../modules/Home/Home";
import DetailPlace from "../modules/DetailPlace/DetailPlace";
import Profile from "../modules/Profile/Profile";
import Login from "../modules/Authentication/pages/Login";
import Register from "../modules/Authentication/pages/Register";
import Map from "../modules/Map/Map";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/detail-place/:id" element={<DetailPlace />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
