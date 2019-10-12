import React, { useContext, useEffect } from "react";
import CricketContext from "../../context/cricketContext";
import MatchListItem from "./MatchListItem";

const MatchList = () => {
  const cricketContext = useContext(CricketContext);
  const { matches, currentSeries, getMatchListing } = cricketContext;
  console.log(cricketContext);
  useEffect(() => {
    if (currentSeries) {
      getMatchListing(currentSeries);
    }
  }, [currentSeries]);
  return (
    currentSeries &&
    matches &&
    matches.map(match => <MatchListItem match={match} key={match.matchID} />)
  );
};

export default MatchList;
