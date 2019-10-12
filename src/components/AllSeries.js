import React, { useContext } from "react";
import CricketContext from "../context/cricketContext";
import Header from "./Header";
import MatchType from "./MatchType";
import Series from "./matchSeries/Series";

const AllSeries = () => {
  const cricketContext = useContext(CricketContext);
  const { currentSeries } = cricketContext;
  return (
    !currentSeries && (
      <div>
        <Header />
        <MatchType />
        <Series />
      </div>
    )
  );
};

export default AllSeries;
