import React, { useContext, useEffect } from "react";
import CricketContext from "../../context/cricketContext";

const MatchList = () => {
  const cricketContext = useContext(CricketContext);
  const { matches, currentSeries, getMatchListing } = cricketContext;
  useEffect(() => {
    if (currentSeries) {
      getMatchListing(currentSeries);
    }
  });
  return <div>MatchList</div>;
};

export default MatchList;
