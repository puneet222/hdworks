import React from "react";
import "./App.css";
import CricketState from "./context/CricketState";
import Header from "./components/Header";
import MatchType from "./components/MatchType";

const App = () => {
  return (
    <CricketState>
      <Header />
      <MatchType />
    </CricketState>
  );
};

export default App;
