import React from "react";
import "./assets/style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import TestMap from "./components/testMap";
import Homepage from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
};

export default App;
