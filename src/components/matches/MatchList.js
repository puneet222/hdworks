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
        <header className="bg-white black-80 tc pv3 avenir">
          <h2 className="mt2 mb0 baskerville i fw1 f3">
            {currentSeries.seriesName}
          </h2>
          <nav className="bt bb tc mw7 center mt2"></nav>
        </header>
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
