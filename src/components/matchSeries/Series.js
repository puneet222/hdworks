import React, { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import CricketContext from "../../context/cricketContext";
import SeriesItem from "./SeriesItem";

const Series = () => {
  const cricketContext = useContext(CricketContext);
  const {
    status,
    type,
    seriesListing,
    loading,
    getSeriesListing
  } = cricketContext;
  useEffect(() => {
    getSeriesListing(type, status);
    // eslint-disable-next-line
  }, [status, type]);
  return !loading ? (
    seriesListing.map(s => <SeriesItem key={s.seriesID} series={s} />)
  ) : (
    <div className="tc pv6">
      <Loader type="TailSpin" color="#ff0000" height={50} width={50} />
    </div>
  );
};

export default Series;
