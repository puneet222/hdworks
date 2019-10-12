import React, { useContext, useEffect } from "react";
import CricketContext from "../../context/cricketContext";
import MatchListItem from "./MatchListItem";

const MatchList = () => {
  const cricketContext = useContext(CricketContext);
  const { matches, currentSeries, getMatchListing } = cricketContext;
  console.log(cricketContext);
  useEffect(() => {
    if (currentSeries) {
      getMatchListing(currentSeries.seriesID);
    }
  }, [currentSeries]);
  return (
    <div>
      {currentSeries && (
        <h2 className="mt2 mb0 tc f5 fw4 ttu tracked">
          {currentSeries.seriesName}
        </h2>
      )}
      {currentSeries &&
        matches &&
        matches.map(match => (
          <MatchListItem match={match} key={match.matchID} />
        ))}
    </div>
  );
};

export default MatchList;
