import React, { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CricketContext from "../../context/cricketContext";
import SeriesItem from "./SeriesItem";

const Series = () => {
  const cricketContext = useContext(CricketContext);
  const {
    status,
    type,
    getData,
    seriesListing,
    loading,
    getSeriesListing
  } = cricketContext;
  useEffect(() => {
    getSeriesListing(type, status);
  }, [status, type]);
  return !loading ? (
    seriesListing.map(s => <SeriesItem key={s.seriesID} series={s} />)
  ) : (
    <div className="tc pv6">
      <Loader type="MutatingDots" color="#ff0000" height={100} width={100} />
    </div>
  );
};

export default Series;
