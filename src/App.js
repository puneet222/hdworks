import React from "react";
import "./App.css";
import CricketState from "./context/CricketState";
import Header from "./components/Header";
import MatchType from "./components/MatchType";
import Series from "./components/matchSeries/Series";

const App = () => {
  return (
    <CricketState>
      <Header />
      <MatchType />
      <Series />
    </CricketState>
  );
};

export default App;
