import React from "react";
import { BrowserRouter } from "react-router-dom";


import "./assets/style/App.scss";
// import './assets/style/_custome.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";

import AppRoutes from "./router/AppRoutes";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
