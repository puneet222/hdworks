import React, { useReducer } from "react";
import CricketContext from "./cricketContext";
import CricketReducer from "./cricketReducer";
import {
  CHANGE_STATUS,
  CHANGE_TYPE,
  GET_SERIES,
  GET_SERIES_LISTING
} from "./types";
import * as CONST from "../Utils/constants";
import { default as ApolloClient } from "apollo-boost";
import { getScheduleQuery, getSeriesListingQuery } from "./queries";

const CricketState = props => {
  const initialState = {
    status: CONST.UPCOMING,
    type: CONST.ALL,
    loading: true,
    series: [],
    seriesListing: []
  };

  const client = new ApolloClient({
    uri: "https://api.devcdc.com/cricket"
  });

  const [state, dispatch] = useReducer(CricketReducer, initialState);

  const getData = (type, status) => {
    const query = getScheduleQuery(type, status);
    client
      .query({
        query: query
      })
      .then(res =>
        dispatch({
          type: GET_SERIES,
          payload: res.data.schedule
        })
      );
  };

  const mergeAllSeriesData = data => {
    let series = [];
    data.forEach(item => series.push(...item.series));
    series = series.filter(item => item.seriesID !== "");
    return series;
  };

  const getSeriesListing = type => {
    const query = getSeriesListingQuery(type);
    client
      .query({
        query: query
      })
      .then(res => {
        let seriesList = mergeAllSeriesData(res.data.listseries);
        dispatch({
          type: GET_SERIES_LISTING,
          payload: seriesList
        });
      });
  };

  const changeStatus = status => {
    dispatch({
      type: CHANGE_STATUS,
      payload: status
    });
  };

  const changeType = type => {
    dispatch({
      type: CHANGE_TYPE,
      payload: type
    });
  };

  return (
    <CricketContext.Provider
      value={{
        status: state.status,
        type: state.type,
        series: state.series,
        seriesListing: state.seriesListing,
        loading: state.loading,
        getData,
        changeStatus,
        changeType,
        getSeriesListing
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
