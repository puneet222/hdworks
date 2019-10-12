import React, { useContext, useEffect } from "react";
import CricketContext from "../../context/cricketContext";
import SeriesItem from "./SeriesItem";

const Series = () => {
  const cricketContext = useContext(CricketContext);
  const { status, type, getData, series, getSeriesListing } = cricketContext;
  useEffect(() => {
    console.log(cricketContext);
    getSeriesListing(type);
    getData(type, status);
  }, [status, type]);
  return series.map(s => <SeriesItem key={s.matchID} series={s} />);
};

export default Series;
