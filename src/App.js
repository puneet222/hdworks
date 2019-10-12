import React from "react";
import "./App.css";
import CricketState from "./context/CricketState";

const App = () => {
  return (
    <CricketState>
      <div className="App"></div>
    </CricketState>
  );
};

export default App;
