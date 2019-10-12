import React from "react";
import "./App.css";
import CricketState from "./context/CricketState";
import Header from "./components/Header";

const App = () => {
  return (
    <CricketState>
      <Header />
    </CricketState>
  );
};

export default App;
