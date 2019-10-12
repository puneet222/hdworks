import React from "react";
import "./App.css";
import CricketState from "./context/CricketState";
import AllSeries from "./components/AllSeries";
import MatchList from "./components/matches/MatchList";

const App = () => {
  return (
    <CricketState>
      <AllSeries />
      <MatchList />
    </CricketState>
  );
};

export default App;
