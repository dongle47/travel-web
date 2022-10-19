import React from "react";
import "antd/dist/antd.css";

import TestMap from "./components/testMap";
import Homepage from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
};

export default App;
