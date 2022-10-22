import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Home";
import Main from "../pages/Main";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
