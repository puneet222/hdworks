import React, { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CricketContext from "../../context/cricketContext";
import MatchListItem from "./MatchListItem";

const MatchList = () => {
  const cricketContext = useContext(CricketContext);
  const {
    matches,
    currentSeries,
    getMatchListing,
    loading,
    setCurrentSeries
  } = cricketContext;
  useEffect(() => {
    if (currentSeries) {
      getMatchListing(currentSeries.seriesID);
    }
    // eslint-disable-next-line
  }, [currentSeries]);
  return (
    <div>
      {currentSeries && (
        <div>
          <header className="bg-white black-80 tc pv3 avenir">
            <h2 className="mt2 mb0 baskerville i fw1 f3">
              {currentSeries.seriesName}
            </h2>
            <nav className="bt bb tc mw7 center mt2"></nav>
          </header>
          <a
            href="#0"
            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr4"
            style={{ marginLeft: "5%" }}
            onClick={() => setCurrentSeries(null)}
          >
            <svg
              className="w1"
              data-icon="chevronLeft"
              viewBox="0 0 32 32"
              style={{ fill: "currentcolor" }}
            >
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
            </svg>
            <span className="pl1">Series</span>
          </a>
        </div>
      )}

      {!loading && currentSeries && matches
        ? matches.map(match => (
            <MatchListItem match={match} key={match.matchID} />
          ))
        : currentSeries &&
          matches && (
            <div className="tc pv6">
              <Loader type="TailSpin" color="#ff0000" height={50} width={50} />
            </div>
          )}
    </div>
  );
};

export default MatchList;
